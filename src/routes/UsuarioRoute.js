const {Router} = require("express");
const {loginUserHandler,deleteUserLogic,restoreUserLogic} = require("../handlers/UsuarioHandler");
const routerUsuario = Router();


routerUsuario.post("/", loginUserHandler);
routerUsuario.delete("/:id", deleteUserLogic);
routerUsuario.put("/restaurar/:id", restoreUserLogic);


module.exports = routerUsuario;
