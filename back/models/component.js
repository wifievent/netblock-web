module.exports = (sequelize, DataTypes) => {
  const component = sequelize.define('component', {
		title: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
  }, {})
  component.associate = (models) => {
		component.hasOne(models.File);
  }
  return component
}