import express from "express"
import jwt from "jsonwebtoken"
import UsuarioService from "./../service/usuario.service.js"

const DEFAULT_MESSAGE = process.env.DEFAULT_ERROR_MESSAGE
const service = new UsuarioService() // Instanciação 
const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const usuarioEncontrado = await service.buscarUm({ email: req.body.email, senha: req.body.senha }, "-senha -__v")
        if(!usuarioEncontrado) throw { status: 404,  clientMessage: "Usuário não encontrado" }
        const token = jwt.sign({
            _id: usuarioEncontrado._id,
            email: usuarioEncontrado.email,
            nome: usuarioEncontrado.nome
        }, process.env.CHAVE_PUBLICA)
        res.json({ token: token })
    } catch (error) {
        res.status(error.status || 500).json({ message: error.clientMessage || DEFAULT_MESSAGE })
        console.log(error)
    }
})


router.get("/:token", (req,res) => {
    const token = req.params.token
    try {
        jwt.verify(token, process.env.CHAVE_PUBLICA)
        res.json({ message: "Token válido" })
    } catch (error) {
        res.status(401).json({ message: "Token inválido" })
    }
})

export default router