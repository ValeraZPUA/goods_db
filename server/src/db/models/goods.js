'use strict';

module.exports = (sequelize, DataTypes) => {
  const Good = sequelize.define('Good', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});

  Good.associate = function (models) {
    Good.belongsTo(models.Client, {
      foreignKey: {
        field: 'clientId',
        onDelete: 'CASCADE'
      }
    })
  };

  return Good;
};