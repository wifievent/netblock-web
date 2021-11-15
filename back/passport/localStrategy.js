const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {User} = require('../models');
const {getHash} = require('../hashing');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'uid',
        passwordField: 'pw'
    }, async (uid, pw, done) => {
        const exUser = await User.findOne({
            where: {uid}
        }).catch((err) => {
            done(err);
        });
      
        if (!exUser) {
            return done(null, false, {message: 'invalid id'});
        }

        if (getHash(pw, exUser.salt) !== exUser.pw) {
            return done(null, false, {message: 'invalid pw'});
        }
        return done(null, exUser);
    }))
}