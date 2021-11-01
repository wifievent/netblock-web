const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.post('/login', controller.login);
router.post('/register', controller.login);
router.get('/check', controller.check);

module.exports = router;