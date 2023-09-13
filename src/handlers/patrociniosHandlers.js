const {postPatrocinios,getPatrocinios} = require('../controllers/patrociniosControllers')

const postPatrociniosHandler = async(req,res)=>{
    const {name,image,mail,phone} = req.body
    try {
        const patrocinios = await postPatrocinios({name,image,mail,phone})
        res.status(200).json(patrocinios)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getPatrociniosHandler = async(req,res) =>{
    try {
        const getPatrocinioss = await getPatrocinios();
        res.status(200).json(getPatrocinioss)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    postPatrociniosHandler,
    getPatrociniosHandler
}