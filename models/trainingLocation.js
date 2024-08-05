const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const TrainingLocation = sequelize.define('TrainingLocation', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
});

TrainingLocation.belongsTo(User, { foreignKey: 'userId' });

module.exports = TrainingLocation;
