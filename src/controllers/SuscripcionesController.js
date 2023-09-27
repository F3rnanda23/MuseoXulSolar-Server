const { Suscripciones, Usuario } = require("../db");

const postSuscripciones = async ({ tipo, date, usuarioId, subscripcion,email,name }) => {
// Busca al usuario que está creando el suscripcion
const usuario = await Usuario.findByPk(usuarioId);

if (!usuario) {
  throw new Error("Usuario no encontrado");
}

// Crea el suscripcion y asocia el usuario
const suscripcion = await Suscripciones.create({
  tipo,
  date,
  usuarioId,
  subscripcion,
  email,
  name
});

// Asocia el suscripcion al usuario
await suscripcion.setUsuario(usuario);

return suscripcion;
};

const getSuscripciones = async () => {
  const getSuscripcion = await Suscripciones.findAll({
    include: {
      model: Usuario, // Nombre del modelo relacionado
      attributes: ['id', 'email'], // Especifica las columnas que deseas incluir
    },
  });

  return getSuscripcion;
};
module.exports = {
  postSuscripciones,
  getSuscripciones
};
