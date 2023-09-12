const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('Patrocinios',{
        name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        mail:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        phone:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        timestamps: false,
    })
}