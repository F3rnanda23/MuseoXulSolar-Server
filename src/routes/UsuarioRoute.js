const {Router} = require("express");
const {loginUserHandler} = require("../handlers/UsuarioHandler");
const routerUsuario = Router();

routerUsuario.post("/", loginUserHandler);


module.exports = routerUsuario;
