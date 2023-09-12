const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Actividades",
    {
      id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      date: {
        type:DataTypes.DATE,
        allowNull:false,
      },
      name: {
        type:DataTypes.STRING,
        allowNull: false, 
      },
      image: {
        type:DataTypes.STRING,
        allowNull:false,
      },
      description: {
        type:DataTypes.JSON,
        allowNull: false
      },
    },
    {
      timestamps: false,
    }
  );
};