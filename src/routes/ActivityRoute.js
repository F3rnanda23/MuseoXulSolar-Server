const { Router } = require("express");
const { 
    createActivityHandler,
    allActivityHandler,
    putActivityHandler,
    deleteActivity,
    restoreActivity,
    idActHandler
} = require("../handlers/ActivityHandlers.js");
const {Actividades,Usuario} = require("../db.js");

const routerActivity = Router();

routerActivity.get("/", allActivityHandler);
routerActivity.post("/create", createActivityHandler);
//* Rutas por /:id
routerActivity.put("/set/:id", putActivityHandler);
routerActivity.get("/:id", idActHandler);
routerActivity.delete("/delete/:id", deleteActivity);
routerActivity.put("/restaurar/:id", restoreActivity);
// Ruta para crear una reserva
routerActivity.post("/reservar", async (req, res) => {
    try {
      const { usuarioId, actividadId } = req.body;
  
      // Verifica si el usuario y la actividad existen antes de crear la reserva
      const usuario = await Usuario.findByPk(usuarioId);
      const actividad = await Actividades.findByPk(actividadId);
  
      if (!usuario || !actividad) {
        return res.status(404).json({ message: "Usuario o actividad no encontrado." });
      }
  
      // Utiliza el método setUsuario para establecer la relación
      await actividad.setUsuarios(usuario);
  
      return res.status(200).json({ message: "Reserva creada con éxito." });
    } catch (error) {
      console.error("Error al crear la reserva:", error);
      return res.status(500).json({ message: "Error interno del servidor." });
    }
  });
  


module.exports = routerActivity;
