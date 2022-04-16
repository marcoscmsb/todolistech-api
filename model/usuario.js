import mongoose from "mongoose"

const schema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    senha: {
        type: String,
        require: true,

    }

})

export default mongoose.model("Usuario",schema) //usuarios
