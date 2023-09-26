// const {Comentarios} = require('../db')
// const {op} = require('sequelize')

// const postComentarios = async({description,date}) =>{
//     const comentariosss = await Comentarios.create({description, date})
//     return comentariosss
// }

// const getComentarios = async() =>{
//     const getComments = await Comentarios.findAll()
//     return getComments
// }

// module.exports = {
//     postComentarios,
//     getComentarios
// }

const { Comentarios, Usuario } = require("../db");
const { Op } = require("sequelize");

const postComentarios = async ({ description, date, UsuarioId, rating, email }) => {
  // Busca al usuario que está creando el comentario
  console.log('aca en controler', email);
  const usuario = await Usuario.findByPk(UsuarioId);

  if (!usuario) {
    throw new Error("Usuario no encontrado");
  }

  // Crea el comentario y asocia el usuario
  const comentario = await Comentarios.create({
    description,
    date,
    UsuarioId,
    rating,
    email
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
