const { User } = require('../../models');
const passport = require('passport');
const { getRandom, getHash } = require('../../hashing');
const { smtpTransport } = require('../../config/email');
const logger = require('../../config/winston');

// 로그인
const login = async (req, res, next) => {
  passport.authenticate('local', (authError, user) => {
    if (authError) {
      logger.error(authError);
      return next(authError);
    }
    if (!user) {
      logger.error("No Authentication");
      console.log(user);
      return res.status(401).json({ msg: "No Authentication" });
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        logger.error(loginError);
        console.error(loginError);
        return next(loginError);
      }
      logger.info('login success');
      return res.status(200).json({ msg: "login success" });
    });
  })(req, res, next);
}

// 회원가입
const register = async (req, res, next) => {
  const { uid, pw, name, email } = req.body;
  const isAdmin = false;

  const salt = getRandom();
  await User.create({
    uid,
    pw: getHash(pw, salt),
    salt,
    name,
    email,
    isAdmin
  }).catch((err) => {
    logger.error(err);
    console.error(err);
    return next(err);
  });
  logger.info('register success');
  return res.status(201).json({ msg: "register success" });
}

// 유저 삭제
const remove = async (req, res, next) => {
  const uid = req.user.dataValues.uid; // 현재 로그인된 아이디
  const id = req.params.id;

  // 관리자도 아니고 해당 유저가 아니라면
  if (uid != id && !req.user.dataValues.isAdmin) {
    logger.error("No Authentication");
    return res.status(403).json({ msg: "No Authentication" });
  }

  // 유저 삭제
  const result = User.destroy({
    where: { uid: id }
  }).catch((err) => {
    logger.error(err);
    console.error(err);
    return next(err);
  });

  if (!result) {
    logger.error("cannot find id");
    return res.status(400).json({ msg: "cannot find id" });
  }
  logger.info('Remove success');
  return res.status(200).json({ msg: "Remove success" });
}

// 아이디 중복체크
const check = async (req, res, next) => {
  const { uid } = req.body;
  const already = await User.count({ where: { uid } }).catch((err) => {
    console.error(err);
    logger.error(err);
    return next(err);
  });
  if (already) {
    logger.error("userid already exist");
    return res.status(409).json({ msg: "userid already exist" });
  }
  logger.info('Available uid');
  return res.status(200).json({ msg: "Available uid" });
}

// 로그아웃
const logout = async (req, res) => {
  req.logout();
  req.session.destroy(); // 세션 파괴
  logger.info("Logout success");
  return res.status(200).json({ msg: "Logout success" });
}

// 세션 체크
const session = async (req, res) => {
  const user = req.user;
  console.log(req.session)
  res.json({
    type: 'info',
    message: 'session OK!',
    admin: user.dataValues.isAdmin,
    session: req.session
  })
}

var generateRandom = function (min, max) {
  var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return ranNum;
}

// router.post('/email', isNotLoggedIn, controller.email);
const email = async (req, res) => {
  const number = generateRandom(111111, 999999)
  const { email } = req.body;
  const mailOptions = {
    from: smtpTransport.options.auth.user,
    to: email,
    subject: "[NetBlock]인증 관련 이메일 입니다",
    text: "오른쪽 숫자 6자리를 입력해주세요 :" + number
  };
  smtpTransport.options.auth.number = number;

  await smtpTransport.sendMail(mailOptions).catch((err) => {
    console.error(err);
    logger.error(err);
    return res.next(err);
  });
  smtpTransport.close();

  logger.info('Send email success');
  return res.status(200).json({ msg: "Send email success" });
}

// router.post('/auth', isNotLoggedIn, controller.auth);
const auth = async (req, res) => {
  const { number } = req.body;
  if (number == smtpTransport.options.auth.number) {
    logger.info('Email authentication success');
    return res.status(200).json({ msg: "Email authentication success" });
  }
  logger.error("Wrong number");
  return res.status(401).json({ msg: "Wrong number" });
}

module.exports = {
  login,
  register,
  remove,
  logout,
  session,
  email,
  auth,
  check
}