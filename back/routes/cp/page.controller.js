require('dotenv').config();
const path = require('path');
const { User, File, Page, Template, sequelize } = require(path.resolve(__dirname, '..', '..', 'models'));
const { getHash } = require(path.resolve(__dirname, '..', '..', 'hashing'));
const logger = require(path.resolve(__dirname, '..', '..', 'config', 'winston'));

const create = async (req, res, next) => {
  const userId = req.user.id;
  const { title, content, name, templateId } = req.body;

  if (!title || !content || !name || !templateId) {
    logger.error('invalid input');
    return res.status(400).json({ msg: 'invalid input' });
  }

  const template = await Template.findByPk(templateId).catch((err) => {
    console.error(err);
    logger.error(err);
    return next(err);
  });
  if (!template) {
    return res.status(403).json({ msg: "invalid access" })
  }

  await sequelize.transaction(async t => {
    const user = await User.findByPk(userId).catch((err) => {
      console.error(err);
      logger.error(err);
      return next(err);
    });

    const pid = getHash(name + userId + Date.now(), user.salt);

    const page = await Page.create({
      title, content, name, pid, userId, templateId
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
  const { title, content, name, templateId } = req.body;
  if (!title || !content || !name || !templateId || Number.isNaN(templateId) || Number.isNaN(pageId)) {
    logger.error('invalid input');
    return res.status(400).json({ msg: 'invalid input' });
  }

  const page = await Page.findOne({
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

    await Page.update({ title, content, name, templateId }, {
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
  if (!pageId) {
    page = await Page.findAll({
      where: { userId },
      include: {
        model: File
      }
    });
  } else {
    if (Number.isNaN(pageId)) {
      return res.status(400).json({ msg: "invalid input" });
    }
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
  if (Number.isNaN(pid)) {
    return res.status(400).json({ msg: "invalid input" });
  }

  const page = await Page.findOne({
    where: { pid },
    include: {
      model: Template,
    }
  });

  const file = await File.findOne({
    where: { pageId: page.id }
  });

  return res.render(page.template.name, {
    name: page.name,
    title: page.title,
    content: page.content,
    image: file.filename,
    prefix: process.env.NODE_ENV === 'production' ? '/api/' : ''
  });
}

module.exports = {
  create,
  update,
  read,
  render
}