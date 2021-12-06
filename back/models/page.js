module.exports = (sequelize, DataTypes) => {
	const page = sequelize.define('page', {
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		pid: {
			type: DataTypes.STRING(128),
			allowNull: false,
		}
	}, {})
	page.associate = (models) => {
		page.hasOne(models.File);
		page.belongsTo(models.User);
		page.belongsTo(models.Template);
	}
	return page
}