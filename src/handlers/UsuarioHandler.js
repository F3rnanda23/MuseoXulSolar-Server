const {
    createUsuario,
    deleteLogicUser,
    restoreLogicUser,
    allUser,
    editUser,
    loginUser,
    buscarUsuarioPorEmail,
    buscarEmailConGoolge,
    idUser
} = require("../controllers/UsuarioController.js");
const { sendEmail } = require("../nodemailer/nodemailer.js");
const {sendEmailBlock} = require("../nodemailer/nodemailerBlocked");

const bringUsers = async (req, res) => {
  try {
    const users = await allUser();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const searchIdUser = async(req,res)=>{
  const {id} = req.params;
  try {
    const response = await idUser(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

const loginUserHandler = async (req, res) => {
  const { birthday, name, email, phone, password, admin, suscripcion,image } = req.body;
  try {
    const existingUser = await buscarUsuarioPorEmail(email);

    if (existingUser) {
      // Si el usuario ya existe, puedes enviar una respuesta de error o realizar alguna otra acción.
      return res
        .status(404)
        .json({ message: "El usuario con este correo electrónico ya existe" });
    }

    const postUser = await createUsuario({
      birthday,
      name,
      image,
      email,
      phone,
      password,
      admin,
      suscripcion
    });
    await sendEmail(email);
    res.status(200).json(postUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteUserLogic = async (req, res) => {
  const { id } = req.params;
  try {
    const found = await idUser(id);
    const deleteUser = deleteLogicUser(id);
    await sendEmailBlock(found.email);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const restoreUserLogic = async (req, res) => {
  const { id } = req.params;
  try {
    const restauredLogicUser = restoreLogicUser(id);
    res.status(200).json(restauredLogicUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const editarUsuario = async (req, res) => {
  const { id } = req.params;
  const { name, birthday, phone, password, admin, suscripcion,image } = req.body;
  try {
    const edit = editUser({
      id,
      name,
      image,
      birthday,
      phone,
      password,
      admin,
      suscripcion,
    });
    res.status(200).json(edit);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const { set, save } = req.session;
  try {
      const result = await loginUser(email, password);
      const { id, name, admin } = result;
    console.log(admin);
      if (result.success) {
          // El inicio de sesión fue exitoso, puedes establecer la sesión del usuario y redirigirlo, o enviar una respuesta de éxito.

          // Ejemplo de establecimiento de sesión utilizando set:
          req.session.user = {
              id,
              name,
              email,
              admin
          };

          // Luego, guarda la sesión para asegurarte de que los cambios se apliquen.
          req.session.save((err) => {
              if (err) {
                  // Maneja los errores de guardado de sesión si es necesario.
                  console.error("Error al guardar la sesión:", err);
              }
          });
          res.status(200).json({ success: true, message: "Inicio de sesión exitoso", id, name, email, admin });
      } else {
          // Manejar el caso en el que el inicio de sesión falla debido a un correo electrónico o contraseña incorrectos.
          res.status(401).json({ success: false, message: "El correo electrónico o la contraseña son incorrectos" });
      }
  } catch (error) {
      res.status(500).json({ success: false, message: "Error interno del servidor" });
  }
};


const handleLoginGoogle = async (req, res) => {
    
        const { email } = req.body 
    try {
        // Firebase ya gestionó el inicio de sesión con Google, así que el usuario ya está autenticado.

       // Puedes obtener información sobre el usuario desde Firebase si es necesario.
  const responseWithUserInfo = await buscarEmailConGoolge(email);
      // Suponiendo que req.user contiene la información del usuario autenticado
        
        // Aquí puedes realizar cualquier acción adicional que necesites con la información del usuario.
        // Por ejemplo, almacenar el usuario en tu base de datos o realizar alguna lógica personalizada.

        res.status(200).json({ success: true, message: "Inicio de sesión con Google exitoso", responseWithUserInfo });
    } catch (error) {
        // Manejar errores aquí
        console.error("Error en el inicio de sesión con Google:", error);
        res.status(500).json({ success: false, message: "Error en el inicio de sesión con Google" });
    }
}

module.exports = {
  loginUserHandler,
  deleteUserLogic,
  restoreUserLogic,
  bringUsers,
  editarUsuario,
  handleLogin,
  handleLoginGoogle,
  searchIdUser
};
