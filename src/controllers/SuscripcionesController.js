const { Suscripciones } = require("../db");

const postSuscripciones = async ({ tipo, date }) => {
  const found = await Suscripciones.findOne({ where: { tipo } });
  if (found) throw new Error("There is already a suscripcion with that name");

  const newSuscripcion = await Suscripciones.create({ tipo, date });
  return newSuscripcion;
};

const getSuscripciones = async () => {
  const suscripcion = await Suscripciones.findAll();
  return suscripcion;
};

module.exports = {
  postSuscripciones,
  getSuscripciones
};
