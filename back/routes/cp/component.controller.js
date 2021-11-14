const path = require('path');
const { User, File, Component, sequelize } = require(path.resolve(__dirname, '..', '..', 'models'));
const { getHash } = require(path.resolve(__dirname, '..', '..', 'hashing'));

const create = async (req, res, next) => {
  const userId = req.user.id;
  const { title, content } = req.body;

  if (!title || !content)
    return res.status(400).json({ msg: 'invalid input' });

  const already = await Component.count({
    where: { userId }
  }).catch((err) => {
    console.error(err);
    return next(err);
  });

  if (already)
    return res.status(409).json({ msg: 'component duplicated' });

  await sequelize.transaction(async t => {
    const user = await User.findByPk(userId).catch((err) => {
      console.error(err);
      return next(err);
    });

    const component = await Component.create({
      title, content, userId,
    }).catch((err) => {
      console.error(err);
      return next(err);
    });

    if (req.file) {//이미지가 존재한다면
      const src = req.file.originalname;
      const size = req.file.size;
      const filename = req.file.filename;
      await File.create({
        src, size,
        sid: getHash(src + userId + Date.now(), user.salt),
        filename,
        userId,
        componentId: component.id,
      }).catch((err) => {
        console.error(err);
        return next(err);
      });
    }
  }).catch((err) => {
    console.error(err);
    return next(err);
  });

  return res.status(201).json({ msg: 'component create success' });

}

const update = async (req, res, next) => {
  const userId = req.user.id;
  const { title, content } = req.body;

  if (!title || !content)
    return res.status(400).json({ msg: 'invalid input' });

  const component = await Component.findOne({
    where: { userId }
  }).catch((err) => {
    console.error(err);
    return next(err);
  });

  if (!component)
    return res.status(403).json({ msg: 'invalid access' });

  await sequelize.transaction(async t => {
    const user = await User.findByPk(userId).catch((err) => {
      console.error(err);
      return next(err);
    });

    await Component.update({ title, content }, {
      where: { id: component.id }
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
          componentId: component.id
        }
      }).catch((err) => {
        console.error(err);
        return next(err);
      });

      if (file) {
        await File.update({
          src, size, sid: getHash(src + userId + Date.now(), user.salt), filename
        }, {
          where: { componentId: component.id }
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
          componentId: component.id
        }).catch((err) => {
          console.error(err);
          return next(err);
        });
      }
    }
  });

  return res.status(200).json({ msg: 'component update success' });
}

const read = async (req, res, next) => {
  const userId = req.user.id;
  const component = await Component.findOne({
    where: userId,
    include: {
      model: File,
    }
  });
  return res.status(200).json(component);
}

module.exports = {
  create,
  update,
  read,
}