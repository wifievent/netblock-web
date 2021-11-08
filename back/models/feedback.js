module.exports = (sequelize, DataTypes) => {
    const feedback = sequelize.define('feedback', {
        title: {
            type: DataTypes.TEXT,
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
        paranoid: true,
    });
    feedback.associate = (models) => {
        feedback.belongsTo(models.User, { foreignKey: 'commenter', targetKey: 'id' });
    };
    return feedback;
}