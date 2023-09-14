const {Router} = require("express");
const {postPatrociniosHandler,
getPatrociniosHandler,
putPatrociniosHandler,
deletePatrociniosHandler,
restorePatriciniosHandler} = require('../handlers/patrociniosHandlers')

const routerPatrocinios = Router();

routerPatrocinios.put('/restaurar/:id',restorePatriciniosHandler)
routerPatrocinios.post('/',postPatrociniosHandler)
routerPatrocinios.get('/', getPatrociniosHandler)
routerPatrocinios.put('/:id',putPatrociniosHandler)
routerPatrocinios.delete('/:id',deletePatrociniosHandler)



module.exports = routerPatrocinios;
