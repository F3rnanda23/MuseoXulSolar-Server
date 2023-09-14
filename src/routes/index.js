const { Router } = require('express');
const routerActivity = require("./ActivityRoute.js");
const routerExposiciones = require("./ExposicionesRoute.js");
const ObrasRoute = require("./ObrasRoute.js");
const PatrociniosRoute = require("./PatrociniosRoute.js");
const routerUsuario = require("./UsuarioRoute.js");
const router = Router();

router.use("/actividades", routerActivity);
router.use("/exposiciones", routerExposiciones );
router.use("/obras", ObrasRoute);
router.use("/patrocinios", PatrociniosRoute);
router.use("/usuario", routerUsuario);

module.exports = router;