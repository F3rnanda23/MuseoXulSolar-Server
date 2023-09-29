const { Suscripciones, Usuario } = require("../db");

const postSuscripciones = async ({ date, usuarioId,email,name }) => {
// Busca al usuario que está creando el suscripcion
console.log('controller' , usuarioId);
console.log('controller' , date);
console.log('controller' , email);
console.log('controller' , name);
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
