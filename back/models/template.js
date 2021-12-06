module.exports = (sequelize, DataTypes) => {
	const template = sequelize.define('template', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
	}, {})
	template.associate = (models) => {
    template.belongsTo(models.Page);
	}
	return template
}