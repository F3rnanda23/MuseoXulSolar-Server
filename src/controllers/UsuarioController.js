const { Usuario } = require("../db");
//* libreria de hashing para las contraseñas;
const bcrypt = require("bcrypt");

const createUsuario = async ({ birthday, name, phone, password, admin }) => {
    //* Hash de la contraseña antes de guardarla en la base de datos
    //* 10 es el numero de rondas de hashing
    const hashedPassword = await bcrypt.hash(password, 10)

    const postUsuario = await Usuario.create({
        birthday,
        name,
        phone,
        password: hashedPassword,//* Guarda la contraseña hasheada
        admin
    });
    return postUsuario;
}

module.exports = {
    createUsuario
}