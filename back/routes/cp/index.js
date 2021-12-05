const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('./cp.controller');
const pageController = require('./page.controller');
const { isLoggedIn } = require(path.resolve(__dirname, '..', 'middlewares', 'middlewares'));
const { imgUp } = require(path.resolve(__dirname, '..', '..', 'multer'));

router.get('/', controller.download);

router.post('/page', isLoggedIn, imgUp, pageController.create);
router.patch('/page/:id', isLoggedIn, imgUp, pageController.update);
router.get('/page', isLoggedIn, pageController.read);
router.get('/page/:id', isLoggedIn, pageController.read);

module.exports = router;
