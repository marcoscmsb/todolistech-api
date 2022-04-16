import express from "express";
import TarefaService from "../service/tarefa.service.js";

const DEFAULT_MESSAGE = process.env.DEFAULT_ERROR_MESSAGE
const service = new TarefaService()
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const tarefasCadastradas = await service.buscarTodas()
        res.json(tarefasCadastradas)
    } catch (error) {
        res.status(error.status || 500).json({ message: error.clientMessage || DEFAULT_MESSAGE })
    }

})

router.post("/", async (req, res) => {
    try {
        const resultado = await service.inserir(req.body)
        res.json(resultado)

    } catch (error) {
        res.status(error.status || 500).json({ message: error.clientMessage || DEFAULT_MESSAGE })
    }
})


router.put("/", async (req, res) => {
    try {
        const resultado = await service.atualizar(req.body)
        res.json(resultado)
    } catch (error) {

    }

})

router.delete("/:id", async (req, res) => {
    try {
        const resultado = await service.remover(req.params.id)
        res.json(resultado)

    } catch (error) {
        res.status(error.status || 500).json({ message: error.clientMessage || DEFAULT_MESSAGE })
    }
})

export default router