const { Usuario } = require("../db");
const crypto = require('crypto');
const { Op, Sequelize } = require('sequelize');
const bcrypt = require("bcrypt");


const restorePassword = async (email) => {
    const user = await Usuario.findOne({ where: { email } });
    if (!user) {
        throw new Error("no se encontro el usuario")
    }

    const resetToken = crypto.randomBytes(20).toString("hex");

    const resetExpires = new Date(Date.now() + 3600000);

    user.reset_password_token = resetToken;
    user.reset_password_expires = resetExpires;
    await user.save();
    return user;
}

const restablecerContraseña = async (token, newPassword) => {
    try {
        const user = await Usuario.findOne({
            where: {
                reset_password_token: token,
                reset_password_expires: { [Op.gt]: Date.now() },
            },
        });

        if (!user) {
            throw new Error("Token de restablecimiento no válido");
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10)
        // Actualiza la propiedad 'password' en el objeto de usuario recuperado
        user.password = hashedPassword;
        user.reset_password_token = null;
        user.reset_password_expires = null;

        // Llama al método 'save()' para guardar los cambios en la base de datos
        await user.save();

        return user;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    restorePassword,
    restablecerContraseña
}