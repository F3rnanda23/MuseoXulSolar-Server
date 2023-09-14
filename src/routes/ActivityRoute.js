const { Router } = require("express");
const { 
    createActivityHandler,
    allActivityHandler,
    putActivityHandler,
    deleteActivity,
    restoreActivity 
} = require("../handlers/ActivityHandlers.js")

const routerActivity = Router();

routerActivity.get("/", allActivityHandler);
routerActivity.post("/", createActivityHandler);
//* Rutas por /:id
routerActivity.put("/:id", putActivityHandler);
routerActivity.get("/:id", putActivityHandler);
routerActivity.delete("/:id", deleteActivity);
routerActivity.put("/restaurar/:id", restoreActivity);


module.exports = routerActivity;
