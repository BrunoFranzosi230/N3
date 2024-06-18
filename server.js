import express from "express";
import cors from "cors"
import db from "./config/database.js";

import proprietarioRota from "./routes/proprietario_routes.js"

import proprietarioModel from "./models/proprietario_model.js"

const server = express()
server.use(express.json())
server.use(cors())

try{
    await db.authenticate()
    console.log("Conexão com Banco de dados Estabelecida")
} catch(e){
    console.log("Erro ao conectar",e)
}

server.use(proprietarioRota)
server,listen(5000, () => console.log("Servidor executando em http://localhost:5000 "))