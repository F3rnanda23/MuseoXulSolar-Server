const {Router} = require("express");
const {createActivityHandler, allActivityHandler,putActivityHandler} = require("../handlers/ActivityHandlers")

const routerActivity = Router();

routerActivity.get("/", allActivityHandler);
routerActivity.post("/", createActivityHandler);
routerActivity.put("/:id", putActivityHandler);
routerActivity.get("/:id",putActivityHandler)


module.exports = routerActivity;
