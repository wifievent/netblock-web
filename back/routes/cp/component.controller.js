const path = require('path');
const { User, File, Page, sequelize } = require(path.resolve(__dirname, '..', '..', 'models'));
const { getHash } = require(path.resolve(__dirname, '..', '..', 'hashing'));

const create = async (req, res, next) => {
  const userId = req.user.id;
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ msg: 'invalid input' });
  }

  const already = await Page.count({
    where: { userId }
  }).catch((err) => {
    console.error(err);
    return next(err);
  });

  if (already) {
    return res.status(409).json({ msg: 'page duplicated' });
  }

  await sequelize.transaction(async t => {
    const user = await User.findByPk(userId).catch((err) => {
      console.error(err);
      return next(err);
    });

    const page = await Page.create({
      title, content, userId
    }).catch((err) => {
      console.error(err);
      return next(err);
    });

    if (req.file) {// 이미지가 존재한다면
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
        console.error(err);
        return next(err);
      });
    }
  }).catch((err) => {
    console.error(err);
    return next(err);
  });

  return res.status(201).json({ msg: 'page create success' });

}

const update = async (req, res, next) => {
  const userId = req.user.id;
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ msg: 'invalid input' });
  }
  const page = await Page.findOne({
    where: { userId }
  }).catch((err) => {
    console.error(err);
    return next(err);
  });

  if (!page) {
    return res.status(403).json({ msg: 'invalid access' });
  }
  await sequelize.transaction(async t => {
    const user = await User.findByPk(userId).catch((err) => {
      console.error(err);
      return next(err);
    });

    await Page.update({ title, content }, {
      where: { id: page.id }
    }).catch((err) => {
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
        console.error(err);
        return next(err);
      });

      if (file) {
        await File.update({
          src, size, sid: getHash(src + userId + Date.now(), user.salt), filename
        }, {
          where: { pageId: page.id }
        }).catch((err) => {
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
          console.error(err);
          return next(err);
        });
      }
    }
  });

  return res.status(200).json({ msg: 'page update success' });
}

const read = async (req, res, next) => {
  const userId = req.user.id;
  const page = await Page.findOne({
    where: userId,
    include: {
      model: File
    }
  });
  return res.status(200).json(page);
}

module.exports = {
  create,
  update,
  read
}