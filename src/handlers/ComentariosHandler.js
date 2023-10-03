const {postComentarios,
getComentarios} = require("../controllers/ComentariosControllers")

const postComentariosHandler = async(req,res) =>{
   
    const {description, date, UsuarioId, rating, email} = req.body
    console.log(req.body);
    try {
        const commentPosteado = await postComentarios({description, email, date, UsuarioId, rating})
        console.log(commentPosteado);
        return res.status(200).json(commentPosteado);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getComentariosHandler = async(req,res) =>{
    try {
        const getComments = await getComentarios()
        res.status(200).json(getComments)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
module.exports ={
    postComentariosHandler,
    getComentariosHandler
}