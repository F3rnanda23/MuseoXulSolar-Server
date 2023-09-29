const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Suscripciones",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true, // Esto garantiza que un usuario tenga una sola suscripción
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subscripcion: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      paranoid: true,
      timeStamp: true,
    }
  );
};
