const {Router} = require("express");
const googleLogin = require("../handlers/googleHandler.js")

const loginGoogle = Router();

loginGoogle.get("/google", googleLogin)

module.exports = loginGoogle;