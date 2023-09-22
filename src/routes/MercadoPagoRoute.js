const {Router} = require('express')
const {pagar} = require('../controllers/mercadoPago')
const routerMp = Router()

routerMp.post('/',pagar)

module.exports = routerMp