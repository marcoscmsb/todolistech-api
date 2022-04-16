import { ObjectID, ObjectId } from "bson"
import mongoose from "mongoose"

const schema = new mongoose.Schema({
    descricao: { 
        type: String,
        require: true
    },
    dataConclusao: {
        type: Date,
        require: false
    },
    dataPrevisao: {
        type: Date,
        require: false
    },
    concluido: {
        type: Boolean,
        require: true
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        require: true
    }
})

export default mongoose.model("Tarefa", schema)