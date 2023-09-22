const {Router} = require('express')
const {postComentariosHandler,
getComentariosHandler} = require('../handlers/ComentariosHandler')
const routeComentarios = Router()

routeComentarios.post("/crear", postComentariosHandler)
routeComentarios.get("/",getComentariosHandler)
module.exports = routeComentarios
