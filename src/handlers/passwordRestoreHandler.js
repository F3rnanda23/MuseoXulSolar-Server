const {
    restorePassword,
    restablecerContraseña
} = require("../controllers/passwordRestoreController");
const {sendEmailPassword} = require("../nodemailer/nodemailerPassword");

const restorePasswordHandler = async(req,res)=>{
    const {email} = req.body;
    try {
        const restore = await restorePassword(email);
        sendEmailPassword(email);
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