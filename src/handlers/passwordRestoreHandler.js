const {
    restorePassword,
    restablecerContraseña
} = require("../controllers/passwordRestoreController");
const {sendEmailPassword} = require("../nodemailer/nodemailerPassword");
const {Usuario} = require("../db.js");

const restorePasswordHandler = async(req,res)=>{
    const {email} = req.params;
    try {
        const restore = await restorePassword(email);
        const user = await Usuario.findOne({where: {email:email}})
        sendEmailPassword(email,user.reset_password_token);
        res.status(200).json(restore);
    } catch (error) {
        res.status(404).json({error: error.messagge});
    }
}

const restablecerContraseñaHandler = async(req,res)=>{
    const { token, newPassword } = req.body;
    try {
        const restablecer = await restablecerContraseña( token, newPassword );
        res.status(200).json(restablecer);
    } catch (error) {
        res.status(404).json({error: error.messagge});
    }
}

module.exports = {
    restorePasswordHandler,
    restablecerContraseñaHandler
}