const { Feedback, User } = require('../../models');
const logger = require('../../config/winston');

//.post('/', isLoggedIn, controller.create)
const create = async (req, res, next) => {
  const uid = req.user.dataValues.uid;
  const user = await User.findOne({
    attributes: ['id'],
    where: {
      uid: uid
    }
  }).catch((err) => {
    logger.error(err);
    console.error(err);
    return next(err);
  });

  const { title, comment, version, os } = req.body;
  const result = await Feedback.create({
    commenter: user.id,
    title,
    comment,
    version,
    os
  }).catch((err) => {
    logger.error(err);
    console.error(err);
    return next(err);
  });

  if (!result) {
    logger.error("feedback is not exist");
    return res.status(400).json({ msg: "feedback is not exist" });
  }
  logger.info('post feedback success');
  return res.status(201).json({ msg: "post feedback success" });
};

//.patch('/:id', isLoggedIn, controller.update)
const update = async (req, res, next) => {
  const { title, comment, version, os } = req.body;
  const result = await Feedback.update({
    title,
    comment,
    os,
    version
  }, {
    where: { id: req.params.id }
  }).catch((err) => {
    logger.error(err);
    console.error(err);
    return next(err);
  });
  if (!result) {
    logger.error("fail to modify");
    return res.status(400).json({ msg: "fail to modify" });
  }
  logger.info('patch feedback success');
  return res.status(200).json(result);
};

//.get('/', isLoggedIn, controller.readAll)
const readAll = async (req, res, next) => {
  const uid = req.user.dataValues.uid;
  const result = await Feedback.findAll({
    attributes: ['id', 'title', 'createdAt'],
    include: {
      model: User,
      where: {
        uid: uid
      }
    }
  }).catch((err) => {
    logger.error(err);
    console.error(err);
    return next(err);
  });

  if (!result) {
    logger.error("cannot find feedback");
    return res.status(400).json({ msg: "cannot find feedback" });
  }
  logger.info('get feedbackAll success');
  return res.status(200).json(result);

}

//.get('/:id', isLoggedIn, controller.read);
const read = async (req, res, next) => {
  const id = req.params.id;
  const result = await Feedback.findOne({
    attributes: ['title', 'comment'],
    where: {
      id: id
    }
  }).catch((err) => {
    logger.error(err);
    console.error(err);
    return next(err);
  });
  if (!result) {
    logger.error("cannot find feedback");
    return res.status(400).json({ msg: "cannot find feedback" });
  }
  logger.info('get feedback success');
  return res.status(200).json(result);
};

//.delete ('/:id', isLoggedIn, controller.remove)
const remove = async (req, res, next) => {
  const result = await Feedback.destroy({ where: { id: req.params.id } }).catch((err) => {
    console.error(err);
    logger.error(err);
    return next(err);
  })
  if (result) {
    logger.info('delete feedback success');
    return res.status(200).json(result);
  }
  else {
    logger.error("cannot find feedback");
    return res.status(403).json(result);
  }
};

module.exports = {
  create,
  update,
  read,
  remove,
  readAll
}