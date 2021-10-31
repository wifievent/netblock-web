const { Board } = require('../../models');

const create = async (req, res, next) => {
  const { name, comment, version, os } = req.body;
  const result = await Board.create({
      name, comment, version, os
  }).catch((err) => {
      console.error(err);
      return next(err);
  });
  return res.status(201).json(result);
};

const update = async (req, res, next) => {
  const result = await Board.update({
    comment: req.body.comment,
  }, {
    where: { id: req.params.id },
  }).catch((err) => {
    console.error(err);
    return next(err);
  });
  return res.status(200).json(result);
};

const read = async (req, res, next) => {
  const result = await Board.findAll().catch((err) => {
    console.error(err);
    return next(err);
  });
  return res.status(200).json(result);
};

const remove = async (req, res, next) => {
  const result = await Board.destroy({ where: { id: req.params.id } }).catch((err) => {
    console.error(err);
    return next(err);
  })
  if (result)
    return res.status(200).json(result);
  else
    return res.status(403).json(result);
};

module.exports = {
  create,
  update,
  read,
  remove
}