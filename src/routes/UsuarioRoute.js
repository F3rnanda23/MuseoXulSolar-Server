const { Router } = require("express");
const {
    loginUserHandler,
    deleteUserLogic,
    restoreUserLogic,
    bringUsers,
    editarUsuario,
    handleLogin,
    handleLoginGoogle,
    searchIdUser
} = require("../handlers/UsuarioHandler.js");
const { buscarEmaiBloqueado } = require("../controllers/UsuarioController")
const routerUsuario = Router();

routerUsuario.post("/login", handleLogin)
routerUsuario.get("/", bringUsers);
routerUsuario.post("/crear", loginUserHandler);
routerUsuario.delete("/:id", deleteUserLogic);
routerUsuario.put("/restaurar/:id", restoreUserLogic);
routerUsuario.put("/editar/:id", editarUsuario);
routerUsuario.post("/loginGoogle", handleLoginGoogle);
routerUsuario.get("/id/:id", searchIdUser);
routerUsuario.get("/email/:email", async (req, res) => {
    const { email } = req.params;
    try {
      const userEmail = await buscarEmaiBloqueado(email);
      // Verifica si el usuario está bloqueado
      if (userEmail === null) {
        res.status(201).send("bloqueado"); // El usuario está bloqueado
      } else {
        res.status(200).send("no_bloqueado"); // El usuario no está bloqueado
      }
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });
  


module.exports = routerUsuario;
