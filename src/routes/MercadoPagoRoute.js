const {Router} = require('express')
const {pagar} = require('../controllers/mercadoPago')
const {mercadopagoHandler} = require("../handlers/mercadoPagoHandler")
const routerMp = Router()

routerMp.post('/',pagar)
routerMp.get("/verificar/:id",mercadopagoHandler);

module.exports = routerMp