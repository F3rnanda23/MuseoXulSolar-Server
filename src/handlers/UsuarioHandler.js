const {
    createUsuario,
    deleteLogicUser,
    restoreLogicUser,
    allUser,
    editUser
} = require("../controllers/UsuarioController");



const bringUsers = async (req, res) => {
    try {
        const users = await allUser();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

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

const editarUsuario = async(req,res)=>{
    const {id} = req.params;
    const { name, birthday, phone, password, admin } = req.body;
    try {
        const edit = editUser({id,name, birthday, phone, password, admin });
        res.status(200).json(edit);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = {
    loginUserHandler,
    deleteUserLogic,
    restoreUserLogic,
    bringUsers,
    editarUsuario
}