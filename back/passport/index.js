const passport = require('passport');
const local = require('./localStrategy');
const { User } = require('../models');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await User.findOne({ where: id }).catch((err) => {
            done(err);
        });
        if (!user) {
            return done(null, false, { message: 'Incorrect id' });
        }
        done(null, user);
    });
    local();
};
