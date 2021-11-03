const passport = require('passport');
const local = require('./localStrategy');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      if (!user)
        return done(null, false, { message: 'Incorrect id' });
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
  local();
};