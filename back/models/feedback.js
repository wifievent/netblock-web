module.exports = (sequelize, DataTypes) => {
    const feedback = sequelize.define('feedback', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        version: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        os: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
    }, {
        timestamps: true,
    });
    return feedback;
}