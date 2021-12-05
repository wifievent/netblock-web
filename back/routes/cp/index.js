const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('./cp.controller');
const pageController = require('./page.controller');
const { isLoggedIn } = require(path.resolve(__dirname, '..', 'middlewares', 'middlewares'));
const { imgUp } = require(path.resolve(__dirname, '..', '..', 'multer'));

router.get('/', controller.download);

router.post('/component', isLoggedIn, imgUp, pageController.create);
router.patch('/component', isLoggedIn, imgUp, pageController.update);
router.get('/component', isLoggedIn, pageController.read);

module.exports = router;
