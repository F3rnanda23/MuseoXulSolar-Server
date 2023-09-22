const {
    createUsuario,
    deleteLogicUser,
    restoreLogicUser,
    allUser,
    editUser,
    loginUser
} = require("../controllers/UsuarioController.js");
const {sendEmail} = require("../nodemailer/nodemailer.js")


const bringUsers = async (req, res) => {
    try {
        const users = await allUser();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const loginUserHandler = async (req, res) => {

    const { birthday, name, email, phone, password, admin } = req.body;
    try {
        const postUser = await createUsuario({ birthday, name, email, phone, password, admin })
        sendEmail(postUser.email)
        res.status(200).json(postUser);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const deleteUserLogic = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = deleteLogicUser(id);
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}


const restoreUserLogic = async (req, res) => {
    const { id } = req.params;
    try {
        const restauredLogicUser = restoreLogicUser(id);
        res.status(200).json(restauredLogicUser);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const editarUsuario = async (req, res) => {
    const { id } = req.params;
    const { name, birthday, phone, password, admin } = req.body;
    try {
        const edit = editUser({ id, name, birthday, phone, password, admin });
        res.status(200).json(edit);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    const { set, save } = req.session
    try {
        const result = await loginUser(email, password);
        const { id, name } = result;

        if (result.success) {
            // El inicio de sesión fue exitoso, puedes establecer la sesión del usuario y redirigirlo, o enviar una respuesta de éxito.

            // Ejemplo de establecimiento de sesión utilizando set:
            req.session.user = {
                id,
                name,
                email,
            };

            // Luego, guarda la sesión para asegurarte de que los cambios se apliquen.
            req.session.save((err) => {
                if (err) {
                    // Maneja los errores de guardado de sesión si es necesario.
                    console.error("Error al guardar la sesión:", err);
                }
            });
            res.status(200).json({ success: true, message: "Inicio de sesión exitoso", id, name, email });
        }
    } catch (error) {
        res.status(401).json(error.message);
    }
};


module.exports = {
    loginUserHandler,
    deleteUserLogic,
    restoreUserLogic,
    bringUsers,
    editarUsuario,
    handleLogin
}