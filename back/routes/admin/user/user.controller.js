const { User } = require('../../../models')

const read = async (req, res, next) => {
  const result = await User.findAll({
    attributes: ['uid', 'pw', 'name', 'email', 'isAdmin'],
  }).catch((err) => {
    console.error(err);
    return next(err);
  });
  if (!result) {
    return res.status(400).json({ msg: "cannot find user" });
  }
  return res.status(200).json(result);
}

module.exports = {
  read
}