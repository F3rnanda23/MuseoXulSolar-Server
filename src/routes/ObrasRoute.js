const {Router} = require("express");
const {getObrasHandler, getObrasIdHandler, postObrasHandler} = require("../handlers/obrasHandler");

const routerObras = Router();

routerObras.get("/", getObrasHandler);
routerObras.get("/:idObra", getObrasIdHandler);
routerObras.post("/crearObra", postObrasHandler);


module.exports = routerObras;