const { Router } = require('express');
const routerActivity = require("./ActivityRoute.js");
const routerExposiciones = require("./ExposicionesRoute.js");
const ObrasRoute = require("./ObrasRoute.js");
const PatrociniosRoute = require("./PatrociniosRoute.js");
const routerUsuario = require("./UsuarioRoute.js");
const router = Router();
const routerMp = require('./MercadoPagoRoute.js')
const routeComentarios = require("./ComentariosRoute.js")

router.use('/pagar',routerMp)
router.use("/actividades", routerActivity);
router.use("/exposiciones", routerExposiciones );
router.use("/obras", ObrasRoute);
router.use("/patrocinios", PatrociniosRoute);
router.use("/usuario", routerUsuario);
router.use('/comentarios', routeComentarios)

module.exports = router;