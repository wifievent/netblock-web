const { User } = require('../../models');

const login = async (req, res, next) => {
  try {
    return res.status(200).json({ msg: 'login' });
  } catch (err) {
    next(err);
  }
}

const register = async (req, res, next) => {
  try {
    return res.status(200).json({ msg: 'register' });
  } catch (err) {
    next(err);
  }
}

const check = async (req, res, next) => {
  try {
    // check login status
    return res.status(200).json({ msg: 'check' });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  login,
  register,
  check,
}