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
     tipo:{
        type: DataTypes.STRING,
        allowNull: false,
     },
     date:{
        type: DataTypes.DATE,
        allowNull: false
     },
     usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true, // Esto garantiza que un usuario tenga una sola suscripción
      }
    },
    {
      paranoid: true,
      timeStamp: true
    }
  );
};
