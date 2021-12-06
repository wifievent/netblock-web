const { User } = require('../../models');
const passport = require('passport');
const { getRandom, getHash } = require('../../hashing');
const { smtpTransport } = require('../../config/email');
const logger = require('../../config/winston');

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

const register = async (req, res, next) => {
  const isAdmin = false;
  const { uid, pw, name, email } = req.body;
  if (!uid || Number.isNaN(uid) || !pw || !name || !email) {
    logger.error('invalid input');
    return res.status(400).json({ msg: "invalid input" });
  }

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

const logout = async (req, res) => {
  req.logout();
  req.session.destroy();
  logger.info("Logout success");
  return res.status(200).json({ msg: "Logout success" });
}

const remove = async (req, res, next) => {
  const userId = req.user.id;
  const deletedUserId = req.params.id;
  if (Number.isNaN(deletedUserId)) {
    return res.status(400).json({ msg: "invalid input" })
  }

  if (userId !== deletedUserId || !req.user.isAdmin) {
    logger.error("No Authentication");
    return res.status(403).json({ msg: "No Authentication" });
  }

  const result = User.destroy({
    where: { uid: id }
  }).catch((err) => {
    logger.error(err);
    console.error(err);
    return next(err);
  });

  if (!result) {
    logger.error("cannot find id");
    return res.status(403).json({ msg: "invalid access" });
  }
  logger.info('Remove success');
  return res.status(200).json({ msg: "Remove success" });
}

const session = async (req, res) => {
  return res.json({
    msg: 'session OK',
    id: req.user.id,
    uid: req.user.uid,
    admin: req.user.dataValues.isAdmin,
    session: req.session
  })
}

var generateRandom = function (min, max) {
  var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return ranNum;
}

const email = async (req, res) => {
  const number = generateRandom(111111, 999999)
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ msg: 'invalid input '});
  }
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
  return res.status(200).json({ msg: "send email success" });
}

const auth = async (req, res) => {
  const { number } = req.body;
  if (!number || Number.isNaN(number)) {
    return res.status(400).json({ msg: "invalid input" });
  }
  if (number !== smtpTransport.options.auth.number) {
    logger.error("Wrong number");
    return res.status(401).json({ msg: "wrong number" });
  }
  logger.info('Email authentication success');
  return res.status(200).json({ msg: "email authentication success" });
}

const check = async (req, res, next) => {
  const { uid } = req.body;
  if (!uid) {
    return res.status(400).json({ msg: "invalid input" });
  }
  const already = await User.count({ where: { uid } }).catch((err) => {
    console.error(err);
    logger.error(err);
    return next(err);
  });
  if (already) {
    logger.error("userid already exist");
    return res.status(409).json({ msg: "userid already exist" });
  }
  logger.info('Valid uid');
  return res.status(200).json({ msg: "Valid uid" });
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