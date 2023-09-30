const {Router} = require('express')
const {pagar} = require('../controllers/mercadoPago');
const {mercadoStatus} = require("../controllers/mercadoPagoStatus")
const routerMp = Router()

routerMp.post('/',pagar)
routerMp.get("/getPaymentDetails/:id", mercadoStatus)


module.exports = routerMp