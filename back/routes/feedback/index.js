const express = require('express');
const router = express.Router();
const controller = require('./feedback.controller');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares/middlewares');

router
  .post('/', isLoggedIn, controller.create)
  .patch('/:id', isLoggedIn, controller.update)
  .delete('/:id', isLoggedIn, controller.remove)
  .get('/', isLoggedIn, controller.read);

module.exports = router;