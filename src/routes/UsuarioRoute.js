const {Router} = require("express");
const {loginUserHandler,deleteUserLogic,restoreUserLogic,bringUsers, editarUsuario} = require("../handlers/UsuarioHandler");
const routerUsuario = Router();

routerUsuario.get("/", bringUsers);
routerUsuario.post("/", loginUserHandler);
routerUsuario.delete("/:id", deleteUserLogic);
routerUsuario.put("/restaurar/:id", restoreUserLogic);
routerUsuario.put("/editar/:id", editarUsuario);


module.exports = routerUsuario;
