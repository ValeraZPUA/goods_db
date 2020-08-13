'use strict';

module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {});

    Client.associate = function (models) {
        Client.hasMany(models.Good, {
            foreignKey: {
                field: 'clientId',
                onDelete: 'CASCADE'
            }
        })
    };

    return Client;
};