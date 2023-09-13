const { Router } = require("express");
const { 
    createActivityHandler,
    allActivityHandler,
    putActivityHandler,
    deleteActivity,
    restoreActivity 
} = require("../handlers/ActivityHandlers")

const routerActivity = Router();

routerActivity.get("/", allActivityHandler);
routerActivity.post("/", createActivityHandler);
routerActivity.put("/:id", putActivityHandler);
routerActivity.get("/:id", putActivityHandler);
routerActivity.delete("/:id", deleteActivity);
routerActivity.put("/restaurar/:id", restoreActivity);


module.exports = routerActivity;
