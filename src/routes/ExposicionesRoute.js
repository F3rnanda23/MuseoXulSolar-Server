const {Router} = require("express");
const {createExpoHandler, allExpoHandler, idExpoHandler, updateExpoHandler} = require("../handlers/expoHandler")

const routerExposiciones = Router();

routerExposiciones.get("/", allExpoHandler);
routerExposiciones.get("/:id", idExpoHandler);
routerExposiciones.post("/", createExpoHandler);
routerExposiciones.put("/:id", updateExpoHandler);


module.exports = routerExposiciones;
