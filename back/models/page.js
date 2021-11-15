module.exports = (sequelize, DataTypes) => {
	const page = sequelize.define('page', {
		title: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {})
	page.associate = (models) => {
		page.hasOne(models.File);
		page.belongsTo(models.User);
	}
	return page
}