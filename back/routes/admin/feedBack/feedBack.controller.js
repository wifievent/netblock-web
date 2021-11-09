const { Feedback, User } = require('../../../models')
const read = async (req, res, next) => {
    const result = await Feedback.findAll({
        attributes: ['id', 'commenter', 'title', 'comment', 'version', 'os', 'createdAt'],
        include: {
            model: User
        }
    }).catch((err) => {
        console.error(err);
        return next(err);
    });
    if (!result) {
        return res.status(400).json({ msg: "cannot find feedback" });
    }
    return res.status(200).json(result);
}

module.exports = {
    read
}