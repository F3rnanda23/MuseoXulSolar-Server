const { Router } = require("express");
const { 
    createActivityHandler,
    allActivityHandler,
    putActivityHandler,
    deleteActivity,
    restoreActivity,
    idActHandler
} = require("../handlers/ActivityHandlers.js")

const routerActivity = Router();

routerActivity.get("/", allActivityHandler);
routerActivity.post("/", createActivityHandler);
//* Rutas por /:id
routerActivity.put("/set/:id", putActivityHandler);
routerActivity.get("/:id", idActHandler);
routerActivity.delete("/:id", deleteActivity);
routerActivity.put("/restaurar/:id", restoreActivity);


module.exports = routerActivity;
