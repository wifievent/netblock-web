const express = require('express');
const router = express.Router();
const controller = require('./captive_portal.controller');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares/middlewares');

router
    //여러 파일 한번에 업로드 가능
    .post('/img', isLoggedIn, controller.upload.array('img'), controller.show)//img -> name속성
module.exports = router;
