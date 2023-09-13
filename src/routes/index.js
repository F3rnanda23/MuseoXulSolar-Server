const { Router } = require('express');
const routerActivity = require("./ActivityRoute");
const routerExposiciones = require("./ExposicionesRoute");
const ObrasRoute = require("./ObrasRoute");
const PatrociniosRoute = require("./PatrociniosRoute");
const UsuarioRoute = require("./UsuarioRoute");
const router = Router();

router.use("/actividades", routerActivity);
router.use("/exposiciones", routerExposiciones );
router.use("/obras", ObrasRoute);
router.use("/patrocionios", PatrociniosRoute);
router.use("/usuario", UsuarioRoute);

module.exports = router;