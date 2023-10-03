const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Donacion', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false, // Hacer que el campo no pueda ser nulo
            defaultValue: 'anonimo', // Establecer el valor predeterminado como 'anonimo'
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    },
        {
            paranoid: true,
            timeStamp: true
        })
}