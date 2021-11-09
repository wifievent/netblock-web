const express = require('express');
const router = express.Router();
const controller = require('./user.controller');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares/middlewares');

router.post('/login', isNotLoggedIn, controller.login);
router.post('/register', isNotLoggedIn, controller.register);
router.get('/logout', isLoggedIn, controller.logout);
router.delete('/:id', isLoggedIn, controller.remove);
router.get('/session', isLoggedIn, controller.session);
router.post('/emailauth', isNotLoggedIn, controller.auth);
router.post('/check', isNotLoggedIn, controller.check);
module.exports = router;