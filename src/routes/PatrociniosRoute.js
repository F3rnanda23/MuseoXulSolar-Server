const { Router } = require("express");
const {
    postPatrociniosHandler,
    getPatrociniosHandler,
    putPatrociniosHandler,
    deletePatrociniosHandler,
    restorePatriciniosHandler 
} = require('../handlers/patrociniosHandlers.js')

const routerPatrocinios = Router();

routerPatrocinios.put('/restaurar/:id', restorePatriciniosHandler)
routerPatrocinios.post('/create', postPatrociniosHandler)
routerPatrocinios.get('/', getPatrociniosHandler)
routerPatrocinios.put('/set/:id', putPatrociniosHandler)
routerPatrocinios.delete('/:id', deletePatrociniosHandler)



module.exports = routerPatrocinios;
