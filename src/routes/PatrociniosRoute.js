const {Router} = require("express");
const {postPatrociniosHandler,
getPatrociniosHandler} = require('../handlers/patrociniosHandlers')

const routerPatrocinios = Router();

routerPatrocinios.post('/',postPatrociniosHandler)
routerPatrocinios.get('/', getPatrociniosHandler)



module.exports = routerPatrocinios;
