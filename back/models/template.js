module.exports = (sequelize, DataTypes) => {
	const template = sequelize.define('template', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
	}, {})
	template.associate = (models) => {
    template.hasMany(models.Page);
	}
	return template
}