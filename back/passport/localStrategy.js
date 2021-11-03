const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const { User } = require('../models');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'uid',
    passwordField: 'pw',
  }, async (uid, pw, done) => {
    try {
      const exUser = await User.findOne({
        where: {
          uid,
          pw: crypto.createHash('sha512').update(pw).digest('base64')
        }
      });
      if (exUser)
        return done(null, exUser);
      else
        done(null, false, { message: 'invalid info' });
    } catch (err) {
      done(err);
    }
  }))
}