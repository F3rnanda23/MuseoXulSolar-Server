const { Patrocinios } = require("../db");


//Ruta para crear Patrocinios
const postPatrocinios = async ({ name, image, mail, phone }) => {
  const found = await Patrocinios.findOne({ where: { name } });
  if (found) throw new Error("There is already a sponsorship with that name");

  const newPatrocinio = await Patrocinios.create({ name, image, mail, phone });
  return newPatrocinio;
};

//Ruta para Traer los patrocinios
const getPatrocinios = async () => {
  const patrociniosss = await Patrocinios.findAll();
  return patrociniosss;
};


//Ruta para cambiar los patrocinios
const putPatrocinios = async ({ id, name, image, mail, phone }) => {
  const patrocinios = await Patrocinios.findByPk(id);

  if (!patrocinios) {
    throw new Error("sponsorship not found");
  }
  //* Actualizar las propiedades de la actividad
  patrocinios.name = name;
  patrocinios.image = image;
  patrocinios.mail = mail;
  patrocinios.phone = phone;
  //* Guardar los cambios en la base de datos
  await patrocinios.save();

  return patrocinios;
};

//Ruta para eliminar los patrocinios
const deletePatrocinios= async (id) => {
    const deletePatro = await Patrocinios.destroy({where:{id}})
    return deletePatro
};

//Ruta para restaurar los patrocinios eliminados
const restorePatricinios = async (id) => {
    const restorePatro = await Patrocinios.restore({where: {id}})
    return restorePatro
};


module.exports = {
  postPatrocinios,
  getPatrocinios,
  putPatrocinios,
  deletePatrocinios,
  restorePatricinios
};
