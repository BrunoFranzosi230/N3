import { Sequelize } from "sequelize";
import db from "../config/database";
import Proprietario from "../models/proprietario_model.js";
import TipoVeiculo from "../models/tipo_model.js";

const Veiculo = db.define('veiculo',{
    id:{
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true, 
    },
    
})