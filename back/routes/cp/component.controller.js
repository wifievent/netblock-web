const path = require('path');
const { User, File, Component, sequelize } = require(path.resolve(__dirname, '..', '..', 'models'));
const { getHash } = require(path.resolve(__dirname, '..', '..', 'hashing'));

const create = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { title, content } = req.body;
    if (!title || !content || !req.file)
      return res.status(400).json({ msg: 'invalid input' });

    const src = req.file.originalname;
    const size = req.file.size;

    await sequelize.transaction(async t => {
      const user = await User.findByPk(userId);
      const component = await Component.create({
        title, content,
      });
      await File.create({
        src, size,
        sid: getHash(src + userId + Date.now(), user.salt),
        userId,
        componentId: component.id,
      });
    });

    return res.status(201).json({ msg: 'component create success' });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  create
}