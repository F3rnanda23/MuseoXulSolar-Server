const {Router} = require("express");
const {createActivityHandler, allActivityHandler} = require("../handlers/ActivityHandlers")

const routerActivity = Router();

routerActivity.get("/", allActivityHandler);
routerActivity.post("/", createActivityHandler);


module.exports = routerActivity;
