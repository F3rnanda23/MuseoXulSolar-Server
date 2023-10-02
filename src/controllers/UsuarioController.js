const { Usuario, Suscripciones, Comentarios, Actividades } = require("../db.js");

//* libreria de hashing para las contraseñas;
const bcrypt = require("bcrypt");

const createUsuario = async ({ birthday, name, phone, password, admin, email, suscripcion, image }) => {
    //* Hash de la contraseña antes de guardarla en la base de datos
    //* 10 es el numero de rondas de hashing
    const hashedPassword = await bcrypt.hash(password, 10)
    const imagen = image? image : "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Background-PNG-Clip-Art-Image.png"
    const postUsuario = await Usuario.create({
        birthday,
        image: imagen,
        name,
        email,
        phone,
        password: hashedPassword,//* Guarda la contraseña hasheada
        admin,
        suscripcion
    });

    return postUsuario;

};

const allUser = async () => {
    const findUser = await Usuario.findAll({
        include: [
            {
                model: Suscripciones,
                attributes: ['tipo', 'date'],
            },
            {
                model: Comentarios,
                attributes: ['description', 'date'],
            },
            {
                model: Actividades,
                attributes: ['description', 'date', "name"],
            },
        ],
    });
    return findUser;
}
const idUser = async (id) => {
    const found = await Usuario.findOne({
        where: { id },
        include: [
            {
                model: Suscripciones,
                attributes: ['tipo', 'date'],
            },
            {
                model: Comentarios,
                attributes: ['description', 'date'],
            },
            {
                model: Actividades,
                attributes: ['description', 'date', "name","image","id","hora"],
            },
        ],
    })
    return found
}

const deleteLogicUser = async (id) => {
    const deleteUser = await Usuario.destroy({ where: { id } });
    return deleteUser;
};

const restoreLogicUser = async (id) => {
    const restores = await Usuario.restore({ where: { id } });
    return restores;
};

const editUser = async ({ id, name, birthday, phone, password, admin, suscripcion, image }) => {
    const users = await Usuario.findByPk(id);

    if (!users) {
        throw new Error("User no encontrado");
    };
    if (image) {
        users.image = image;
    }
    if (name) {
        users.name = name;
    }
    if (phone) {
        users.phone = phone;
    }
    users.birthday = birthday;
    users.password = password;
    users.admin = admin;
    users.suscripcion = suscripcion;

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
    const { id, name, admin} = user;
    if (passwordMatch) {
        // La contraseña es válida, el usuario puede iniciar sesión
        return { success: true, email, id, name, admin };
    } else {
        // La contraseña no coincide, devuelve un mensaje de error
        return { success: false, message: "Correo electrónico o contraseña incorrecta." };
    }

};

const buscarUsuarioPorEmail = async (email) => {
    try {
        // Realiza la búsqueda del usuario en la base de datos (esto puede variar según tu tecnología de base de datos)
        const usuario = await Usuario.findOne({ where: { email } });

        if (usuario) {
            throw new Error("Ya existe un usuario con este correo electrónico");
        }

        return usuario;
    } catch (error) {
        throw error;
    }
};

const buscarEmailConGoolge = async (email) => {
    const userInfo = Usuario.findOne({ where: { email } })

    return userInfo;
}

module.exports = {
    createUsuario,
    deleteLogicUser,
    restoreLogicUser,
    allUser,
    editUser,
    loginUser,
    buscarUsuarioPorEmail,
    buscarEmailConGoolge,
    idUser
}