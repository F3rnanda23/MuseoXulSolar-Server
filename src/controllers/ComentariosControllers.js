

const { Comentarios, Usuario } = require("../db");
const { Op } = require("sequelize");

const postComentarios = async ({ description, date, UsuarioId }) => {
  // Busca al usuario que está creando el comentario
  const usuario = await Usuario.findByPk(UsuarioId);

  if (!usuario) {
    throw new Error("Usuario no encontrado");
  }

  // Crea el comentario y asocia el usuario
  const comentario = await Comentarios.create({
    description,
    date,
    UsuarioId
  });

  // Asocia el comentario al usuario
  await comentario.setUsuario(usuario);

  return comentario;
};

const getComentarios = async () => {
    const getComments = await Comentarios.findAll({
      include: {
        model: Usuario, // Nombre del modelo relacionado
        attributes: ['id', 'email'], // Especifica las columnas que deseas incluir
      },
    });
  
    return getComments;
  };

module.exports = {
  postComentarios,
  getComentarios,
};
