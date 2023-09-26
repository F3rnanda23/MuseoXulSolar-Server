const {postComentarios,
getComentarios} = require("../controllers/ComentariosControllers")

const postComentariosHandler = async(req,res) =>{
    console.log(req.body);
    const {description, date, UsuarioId, rating} = req.body
    try {
        const commentPosteado = await postComentarios({description,date, UsuarioId, rating})
        res.status(200).json(commentPosteado)
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