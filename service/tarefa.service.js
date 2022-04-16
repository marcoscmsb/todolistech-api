import tarefaModel from "../model/tarefa.js"

export default class tarefaService {

    async buscarTodas() {
        try {
            const resultado = await tarefaModel.find({})
            return resultado
        } catch (error) {
            throw {

                message: "Erro ao buscar todas as tarefas " + error
            }
        }
    }
    async inserir(tarefa) {
        try {
            const resultado = await tarefaModel.create(tarefa)
            return resultado
        } catch (error) {
            throw {

                message: "Erro ao inserir a tarefas " + error
            }
        }
    }

    async atualizar(tarefa) {
        try {
            const resultado = await tarefaModel.updateOne({ _id: tarefa._id }, tarefa)
            return resultado
        } catch (error) {
            throw {

                message: "Erro ao atualizar a tarefas " + error
            }
        }
    }
    async remover(id){
        try {
            const resultado = await tarefaModel.deleteOne({_id: id})
            return resultado
        } catch (error) {
            throw{
            message: "Erro ao remover a tarefa" + error
            }
        }
    }
}