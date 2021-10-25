const board = require('../models/board');

const create = async (req, res) => {
    const { name, comment, version, os } = req.body;
    const result = await board.create({
        name, comment, version, os
    }).catch((err) => {
        console.error(err);
        return res.status(500).json(result);
    });
    res.status(201).json(result);
};

const update = async (req, res) => {
    const result = await board.update({
        comment: req.body.comment,
    }, {
        where: { id: req.params.id },
    }).catch((err) => {
        console.error(err);
        return res.status(500).json(result);
    });
    res.status(201).json(result);
};

const read = async (req, res) => {
    const result = await board.findAll({});
    res.status(201).json(result);
};

const remove = async (Req, res) => {
    const result = await board.destroy({ where: { id: req.params.id } }).catch((err) => {
        console.error(err);
        return res.status(500).json(result);
    })
    if (result)
        return res.status(201).json(result);
    else
        return res.status(403).json(result);
};

module.exports = {
    create,
    update,
    read,
    remove
}