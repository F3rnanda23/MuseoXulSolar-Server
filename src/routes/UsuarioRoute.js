const { Router } = require("express");
const {
    loginUserHandler,
    deleteUserLogic,
    restoreUserLogic,
    bringUsers,
    editarUsuario,
    handleLogin
} = require("../handlers/UsuarioHandler.js");
const routerUsuario = Router();

routerUsuario.get("/login", handleLogin)
routerUsuario.get("/", bringUsers);
routerUsuario.post("/login", loginUserHandler);
routerUsuario.delete("/:id", deleteUserLogic);
routerUsuario.put("/restaurar/:id", restoreUserLogic);
routerUsuario.put("/editar/:id", editarUsuario);


module.exports = routerUsuario;
