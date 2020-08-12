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

    return Client;
};