const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'uid',
    passwordField: 'pw',
  }, async (uid, pw, done) => {
    try {
      const exUser = await User.findOne({
        where: { uid }
      })
      if (exUser) {
        const result = await bcrypt.compare(pw, exUser.pw).catch((err) => console.error(err));
        if (result) {
          done(null, exUser);
        } else {
          done(null, false, { message: 'invalid pw' });
        }
      } else {
        done(null, false, { message: 'invalid id' });
      }
    } catch (err) {
      done(err);
    }
  }));
};