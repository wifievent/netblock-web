const express = require('express');
const router = express.Router();
const path = require('path');
const componentController = require('./component.controller');
const { isLoggedIn, isNotLoggedIn } = require(path.resolve(__dirname, '..', 'middlewares', 'middlewares'));
const { imgUp } = require(path.resolve(__dirname, '..', '..', 'multer'));

router.post('/component', isLoggedIn, imgUp, componentController.create);
router.patch('/component', isLoggedIn, imgUp, componentController.update);
router.get('/component', isLoggedIn, componentController.read);

module.exports = router;
