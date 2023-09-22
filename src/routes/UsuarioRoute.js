const { Router } = require("express");
const {
    loginUserHandler,
    deleteUserLogic,
    restoreUserLogic,
    bringUsers,
    editarUsuario,
    handleLogin,
    handleLoginGoogle,
} = require("../handlers/UsuarioHandler.js");
const routerUsuario = Router();

routerUsuario.post("/login", handleLogin)
routerUsuario.get("/", bringUsers);
routerUsuario.post("/crear", loginUserHandler);
routerUsuario.delete("/:id", deleteUserLogic);
routerUsuario.put("/restaurar/:id", restoreUserLogic);
routerUsuario.put("/editar/:id", editarUsuario);
routerUsuario.post("/loginGoogle",handleLoginGoogle);


module.exports = routerUsuario;
