const { Obras } = require("../db.js");
const { Op } = require("sequelize");
const { uploadCloud, deleteFile } = require("../tools/tools.js");
const path = require("path");

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
const postObras = async ({ date, name, year, images }) => {
try {
    const found = await Obras.findOne({ where: { name } });
    if (found) {
      throw new Error("The obra already exist");
    }
    let pathImg = "direccion de una imagen generica"
    if (images.length) {
      let nameImg = images[0].originalname
      let result = await uploadCloud(images[0].path, nameImg)
      result && (pathImg = result.url)
      const rutaCompleta = path.resolve(
        __dirname,
        "../public/uploads",
        nameImg
      );
      deleteFile(rutaCompleta)
    }
  
  
    const createObra = await Obras.create({ date, name, year, image: pathImg });
    return createObra;
} catch (error) {
  console.log(error);
}
};

module.exports = {
  getObras, getObrasId, postObras, searchByNameObras
};