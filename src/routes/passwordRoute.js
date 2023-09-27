const { Router } = require("express");
const {
    restorePasswordHandler,
    restablecerContraseñaHandler
} = require("../handlers/passwordRestoreHandler");

const routePassword = Router();

routePassword.put("/restore",restorePasswordHandler);
routePassword.put("/restablecer",restablecerContraseñaHandler);

module.exports = routePassword;