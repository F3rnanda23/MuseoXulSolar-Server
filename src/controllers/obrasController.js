const { Obras } = require("../db.js");
const { Op } = require("sequelize");

const searchByNameObras = async (name) => {
  const foundName = await Obras.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      }
    }
  })
  return foundName;
}

const getObras = async () => {
    try {
        const obras = await Obras.findAll();
        return obras;
    } catch (error) {
        console.log("Error en getObras:", error.message);
    }
};
const getObrasId = async (idObra) => {
    try {
        const obra = await Obras.findByPk(idObra);
        return obra;
    } catch (error) {
        console.log("Error en getObrasId:", error.message);
    }
};
const postObras = async ({date,name,year,image}) => {
    const found = await Obras.findOne({ where: { name } })
    if (found) { throw new Error("The obra already exist") }
    const createObra = await Obras.create({ date, name, year, image });
    return createObra
};

module.exports = {
    getObras, getObrasId, postObras,searchByNameObras
};