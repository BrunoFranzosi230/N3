import { Sequelize } from "sequelize";

import db from "../config/database.js";

const Proprietario = db.define('proprietario', {
    id: {
        type:Sequelize.INTIGER,
        autoIncrement: true,
        primaryKey: true
    },
    cpf: {
       type: Sequelize.STRING(11),
       unique: true,
    },
    nome: {
        type: Sequelize.STRING(100)
    },
    telefone: {
        type: Sequelize.STRING(30)
    }

}, {
    
    freezeTableName: true,
    timestamps: false
});

export default Proprietario