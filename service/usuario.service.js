import usuarioModel from "./../model/usuario.js"

export default class UsuarioService { 
    async buscarTodos() {
        try {
            const resultado = await usuarioModel.find({})
            return resultado
        } catch (error) {
            throw { 
                message: "Erro ao buscar todos os usuários: " + error
            }
        }
    }

    async buscarUm(filtro, prop = "") {
        try {
            const resultado = await usuarioModel.findOne(filtro, prop)
            return resultado
        } catch (error) {
            throw { 
                message: "Erro ao buscar um usuário por filtro: " + error
            }
        }
    }
    
    async inserir(usuario) {
        try {
            const resultado = await usuarioModel.create(usuario)
            return resultado
        } catch (error) {
            throw {
                message: "Erro ao inserir usuário: " + error
            }
        }
    }

    async atualizar(usuario) {
        try {
            const resultado = await usuarioModel.updateOne({ _id: usuario._id }, usuario)
            return resultado
        } catch (error) {
            throw {
                message: "Erro ao atualizar usuário: " + error
            }
        }
    }

    async remover(id)
 {
        try {
            const resultado = await usuarioModel.deleteOne({ _id: id })
            return resultado
        } catch (error) {
            throw {
                message: "Erro ao remover usuário: " + error
            }
        }
    }
 }