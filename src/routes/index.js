const { Router } = require('express');
const routerActivity = require("./ActivityRoute");
const routerExposiciones = require("./ExposicionesRoute");
const ObrasRoute = require("./ObrasRoute");
const PatrociniosRoute = require("./PatrociniosRoute");
const routerUsuario = require("./UsuarioRoute");
const router = Router();

router.use("/actividades", routerActivity);
router.use("/exposiciones", routerExposiciones );
router.use("/obras", ObrasRoute);
router.use("/patrocinios", PatrociniosRoute);
router.use("/usuario", routerUsuario);

module.exports = router;