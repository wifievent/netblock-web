const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('./cp.controller');
const componentController = require('./component.controller');
const { isLoggedIn } = require(path.resolve(__dirname, '..', 'middlewares', 'middlewares'));
const { imgUp } = require(path.resolve(__dirname, '..', '..', 'multer'));

router.get('/', isLoggedIn, controller.download);

router.post('/component', isLoggedIn, imgUp, componentController.create);
router.patch('/component', isLoggedIn, imgUp, componentController.update);
router.get('/component', isLoggedIn, componentController.read);

module.exports = router;
