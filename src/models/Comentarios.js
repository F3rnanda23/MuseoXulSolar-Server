const { DataTypes } = require("sequelize");
const { Usuario } = require('./Usuario')

module.exports = (sequelize) => {
  sequelize.define(
    "Comentarios",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      UsuarioId: {
        type: DataTypes.INTEGER, // Asegúrate de que el tipo de datos coincida con el tipo de la clave primaria en el modelo Usuario
        references: {
          model: Usuario,
          key: 'id', // Nombre del campo en el modelo Usuario que se relaciona con la clave primaria
        },
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type:DataTypes.STRING,
        allowNull :true,
        default: 'Anonimo'

      }
    },
    {
      paranoid: true,
      timeStamp: true,
    }
  );
};

