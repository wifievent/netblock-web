const path = require('path');
const { User, File, Page, sequelize } = require(path.resolve(__dirname, '..', '..', 'models'));
const { getHash } = require(path.resolve(__dirname, '..', '..', 'hashing'));
const logger = require('../../config/winston');

const create = async (req, res, next) => {
  const userId = req.user.id;
  const { title, content, name } = req.body;

  if (!title || !content || !name) {
    logger.error('invalid input');
    return res.status(400).json({ msg: 'invalid input' });
  }

  await sequelize.transaction(async t => {
    const user = await User.findByPk(userId).catch((err) => {
      console.error(err);
      logger.error(err);
      return next(err);
    });

    const pid = getHash(name + userId + Date.now(), user.salt);

    const page = await Page.create({
      title, content, name, pid, userId
    }).catch((err) => {
      logger.error(err);
      console.error(err);
      return next(err);
    });

    if (req.file) {
      const src = req.file.originalname;
      const size = req.file.size;
      const filename = req.file.filename;
      await File.create({
        src, size,
        sid: getHash(src + userId + Date.now(), user.salt),
        filename,
        userId,
        pageId: page.id
      }).catch((err) => {
        logger.error(err);
        console.error(err);
        return next(err);
      });
    }
  }).catch((err) => {
    logger.error(err);
    console.error(err);
    return next(err);
  });
  logger.info('page create success');
  return res.status(201).json({ msg: 'page create success' });

}

const update = async (req, res, next) => {
  const userId = req.user.id;
  const pageId = req.params.id;
  const { title, content, name } = req.body;
  if (!title || !content || !name) {
    logger.error('invalid input');
    return res.status(400).json({ msg: 'invalid input' });
  }
  
  const page = await Page.count({
    where: { id: pageId, userId }
  }).catch((err) => {
    logger.error(err);
    console.error(err);
    return next(err);
  });
  if (!page) {
    logger.error('invalid access');
    return res.status(403).json({ msg: 'invalid access' });
  }

  await sequelize.transaction(async t => {
    const user = await User.findByPk(userId).catch((err) => {
      logger.error(err);
      console.error(err);
      return next(err);
    });

    await Page.update({ title, content, name }, {
      where: { id: page.id }
    }).catch((err) => {
      logger.error(err);
      console.error(err);
      return next(err);
    });

    if (req.file) {
      const src = req.file.originalname;
      const size = req.file.size;
      const filename = req.file.filename;
      const file = await File.findOne({
        where: {
          pageId: page.id
        }
      }).catch((err) => {
        logger.error(err);
        console.error(err);
        return next(err);
      });

      if (file) {
        await File.update({
          src, size, sid: getHash(src + userId + Date.now(), user.salt), filename
        }, {
          where: { pageId: page.id }
        }).catch((err) => {
          logger.error(err);
          console.error(err);
          return next(err);
        });
      } else {
        await File.create({
          src,
          size,
          sid: getHash(src + userId + Date.now(), user.salt),
          filename,
          userId,
          pageId: page.id
        }).catch((err) => {
          logger.error(err);
          console.error(err);
          return next(err);
        });
      }
    }
  });
  logger.info('page update success');
  return res.status(200).json({ msg: 'page update success' });
}

const read = async (req, res, next) => {
  const pageId = req.params.id;
  const userId = req.user.id;

  let page;
  if (Number.isNaN(pageId)) {
    page = await Page.findAll({
      where: { userId },
      include: {
        model: File
      }
    });
  } else {
    page = await Page.findOne({
      where: { id: pageId, userId },
      include: {
        model: File
      }
    });
  }
  logger.info('get page success');
  return res.status(200).json(page);
}

const render = async (req, res, next) => {
  const pid = req.params.id;
  console.log(pid);
  const page = await Page.findOne({
    where: { pid }
  });

  const file = await File.findOne({
    where: { pageId: page.id }
  })
  return res.render(page.name, { title: page.title, content: page.content });
}

module.exports = {
  create,
  update,
  read,
  render
}