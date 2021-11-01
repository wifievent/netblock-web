const { User } = require('../../../models')

const read = async (req, res, next) => {
  try {
    const result = await User.findAll();
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  read
}