import "dotenv/config"
import fs from "fs"
import express from "express"
import morgan from "morgan"
import cors from "cors"
import { connect } from "./db/index.js"
import usuarioRoute from "./route/usuario.route.js"
import authRoute from "./route/auth.route.js"
import tarefaroute from "./route/tarefa.route.js"

const PORT = process.env.PORT
const api = express()

const accessLogStream = fs.createWriteStream('./access.log', { flags: 'a' })

connect()
api.use(cors())
api.use(express.json())
api.use(morgan(":date[clf] :remote-addr - :remote-user :method :url :status :response-time ms", { stream: accessLogStream }))
api.use("/usuario", usuarioRoute)
api.use("/auth", authRoute)
api.use("/tarefa",tarefaroute)

api.listen(PORT, () => {
    console.log("API rodando na porta: " + PORT);
})