import express from "express";
import cors from "cors";
import db from "./config/database.js";
import usuarioRoutes from "./routes/usuario_routes.js";
import proprietarioRoutes from "./routes/proprietario_routes.js";
import veiculoRoutes from "./routes/veiculo_routes.js";
import proprietarioModel from "./models/proprietario_model.js";
import veiculoModel from "./models/veiculo_model.js";
import tipoModel from "./models/tipo_model.js";

const server = express();
server.use(express.json());
server.use(cors());

try {
    await db.authenticate();
    console.log("Conexão com Banco de dados Estabelecida");
} catch (e) {
    console.log("Erro ao conectar", e);
}


try {
    await db.sync();
    console.log("Modelos sincronizados com o banco de dados");
} catch (e) {
    console.log("Erro ao sincronizar os modelos", e);
}


server.use('/api/usuario', usuarioRoutes);
server.use('/api/proprietario', proprietarioRoutes);
server.use('/api/veiculo', veiculoRoutes);

server.listen(5000, () => console.log("Servidor executando em http://localhost:5000"));