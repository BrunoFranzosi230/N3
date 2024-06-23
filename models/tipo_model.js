import { Sequelize } from "sequelize";
import db from "../config/database.js";

const TipoVeiculo = db.define('tipo', {

    id:{
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement:  true
    },
    nome_tipo:{
        type: Sequelize.STRING(50),
    }
},{
    freezeTableName: true,
    timestamps: false
});

export default TipoVeiculo;