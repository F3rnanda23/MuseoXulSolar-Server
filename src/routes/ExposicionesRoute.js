const { Router } = require("express");
const {
    createExpoHandler,
    allExpoHandler,
    idExpoHandler,
    updateExpoHandler,
    deleteExpo,
    restoreExpo
} = require("../handlers/expoHandler.js")

const routerExposiciones = Router();

routerExposiciones.get("/", allExpoHandler);
routerExposiciones.get("/:id", idExpoHandler);
routerExposiciones.post("/", createExpoHandler);
routerExposiciones.put("/:id", updateExpoHandler);
routerExposiciones.delete("/:id", deleteExpo);
routerExposiciones.put("/restore/:id", restoreExpo)


module.exports = routerExposiciones;
