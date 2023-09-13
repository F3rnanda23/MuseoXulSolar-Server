const {createUsuario}=require("../controllers/UsuarioController");

const loginUserHandler = async(req,res)=>{
    
    const{birthday,name,phone,password,admin}= req.body;
    try {
        const postUser = await createUsuario({birthday,name,phone,password,admin})
        res.status(200).json(postUser);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = {
    loginUserHandler
}