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

export default router