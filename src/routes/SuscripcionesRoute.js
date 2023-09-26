const {Router} = require('express')
const {postSuscripcionesHandler, getSuscripcionesHandler} = require('../handlers/SuscripcionesHandler')
const suscripcionRoute = Router()

suscripcionRoute.post('/',postSuscripcionesHandler)
suscripcionRoute.get('/', getSuscripcionesHandler)

module.exports = suscripcionRoute