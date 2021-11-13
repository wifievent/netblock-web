const { User } = require('../../models');
const passport = require('passport');
const { getRandom, getHash } = require('../../hashing');
const { smtpTransport } = require('../../config/email');

//로그인
const login = async (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      return next(authError);
    }
    if (!user) {
      console.log(user);
      return res.status(401).json({ msg: "No Authentication" });
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.status(200).json({ msg: "login success" });
    });
  })(req, res, next);
}

//회원가입
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
    console.error(err);
    return next(err);
  });
  return res.status(201).json({ msg: "register success" });
}

//유저 삭제
const remove = async (req, res, next) => {
  const uid = req.user.dataValues.uid; //현재 로그인된 아이디
  const id = req.params.id;

  //관리자도 아니고 해당 유저가 아니라면
  if (uid != id && !req.user.dataValues.isAdmin) return res.status(403).json({ msg: "No Authentication" });

  //유저 삭제
  const result = User.destroy({
    where: { uid: id },
  }).catch((e) => {
    console.error(err);
    return next(err);
  });

  if (!result) return res.status(400).json({ msg: "cannot find id" });
  return res.status(200).json({ msg: "Remove success" });
}

//아이디 중복체크
const check = async (req, res, next) => {
  const { uid } = req.body;
  const already = await User.count({ where: { uid } }).catch((err) => {
    console.error(err);
    return next(err);
  });
  if (already)
    return res.status(409).json({ msg: "userid already exist" });
  return res.status(200).json({ msg: "Available uid" });
}

//로그아웃
const logout = async (req, res, next) => {
  req.logout();
  req.session.destroy(); //세션 파괴
  return res.status(200).json({ msg: "Logout success" });
}

//세션 체크
const session = async (req, res, next) => {
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

//router.post('/email', isNotLoggedIn, controller.email);
const email = async (req, res, next) => {
  try {
    const number = generateRandom(111111, 999999)
    const { email } = req.body;
    const mailOptions = {
      from: smtpTransport.options.auth.user,
      to: email,
      subject: "[NetBlock]인증 관련 이메일 입니다",
      text: "오른쪽 숫자 6자리를 입력해주세요 :" + number
    };
    smtpTransport.options.auth.number = number;

    await smtpTransport.sendMail(mailOptions);
    smtpTransport.close();

    return res.status(200).json({ msg: "Send email success" });
  } catch (err) {
    res.next(err);
  }
}

//router.post('/auth', isNotLoggedIn, controller.auth);
const auth = async (req, res, next) => {
  const { number } = req.body;
  if (number == smtpTransport.options.auth.number) return res.status(200).json({ msg: "Email authentication success" });
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