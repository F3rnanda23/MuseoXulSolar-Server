const { Usuario } = require("../db.js");
//* libreria de hashing para las contraseñas;
const bcrypt = require("bcrypt");

const createUsuario = async ({ birthday, name, phone, password, admin, email }) => {
    //* Hash de la contraseña antes de guardarla en la base de datos
    //* 10 es el numero de rondas de hashing
    const hashedPassword = await bcrypt.hash(password, 10)

    const postUsuario = await Usuario.create({
        birthday,
        name,
        email,
        phone,
        password: hashedPassword,//* Guarda la contraseña hasheada
        admin
    });
    return postUsuario;
};

const allUser = async () => {
    const findUser = await Usuario.findAll();
    return findUser;
};

const deleteLogicUser = async (id) => {
    const deleteUser = await Usuario.destroy({ where: { id } });
    return deleteUser;
};

const restoreLogicUser = async (id) => {
    const restores = await Usuario.restore({ where: { id } });
    return restores;
};

const editUser = async ({ id, name, birthday, phone, password, admin }) => {
    const users = await Usuario.findByPk(id);

    if (!users) {
        throw new Error("User no encontrado");
    };

    users.name = name;
    users.birthday = birthday;
    users.phone = phone;
    users.password = password;
    users.admin = admin;

    await users.save();

    return users;
}

const loginUser = async (email, password) => {

    // Busca el usuario por su dirección de correo electrónico
    const user = await Usuario.findOne({ where: { email } });

    // Si no se encuentra el usuario, devuelve un mensaje de error
    if (!user) {
        return { success: false, message: "Correo electrónico o contraseña incorrecta." };
    }

    // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(password, user.password);
    const { id, name, } = user;
    if (passwordMatch) {
        // La contraseña es válida, el usuario puede iniciar sesión
        return { success: true, email,id,name };
    } else {
        // La contraseña no coincide, devuelve un mensaje de error
        return { success: false, message: "Correo electrónico o contraseña incorrecta." };
    }

};

const buscarUsuarioPorEmail = async (email) => {
    try {
        // Realiza la búsqueda del usuario en la base de datos (esto puede variar según tu tecnología de base de datos)
        const usuario = await Usuario.findOne({ where: {email} });
  
        if (usuario) {
          throw new Error("Ya existe un usuario con este correo electrónico");
        }
  
        return usuario;
      } catch (error) {
        throw error;
      }
  };

module.exports = {
    createUsuario,
    deleteLogicUser,
    restoreLogicUser,
    allUser,
    editUser,
    loginUser,
    buscarUsuarioPorEmail
}