const {
    createUsuario,
    deleteLogicUser,
    restoreLogicUser
} = require("../controllers/UsuarioController");

const loginUserHandler = async (req, res) => {

    const { birthday, name, phone, password, admin } = req.body;
    try {
        const postUser = await createUsuario({ birthday, name, phone, password, admin })
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

module.exports = {
    loginUserHandler,
    deleteUserLogic,
    restoreUserLogic
}