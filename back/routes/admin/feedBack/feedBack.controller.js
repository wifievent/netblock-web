const { Feedback } = require('../../../models')

const read = async (req, res, next) => {
    try {
        const result = await Feedback.findAll();
        return res.status(200).json(result);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    read
}