const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('./cp.controller');
const pageController = require('./page.controller');
const templateController = require('./template.controller');
const { isLoggedIn } = require(path.resolve(__dirname, '..', 'middlewares', 'middlewares'));
const { imgUp } = require(path.resolve(__dirname, '..', '..', 'multer'));

router.get('/', controller.download);

router.post('/page', isLoggedIn, imgUp, pageController.create);
router.patch('/page/:id', isLoggedIn, imgUp, pageController.update);
router.delete('/page/render/:id', isLoggedIn, pageController.remove);
router.get('/page', isLoggedIn, pageController.read);
router.get('/page/:id', isLoggedIn, pageController.read);
router.get('/page/render/:id', pageController.render);
router.get('/template', isLoggedIn, templateController.read);

module.exports = router;
