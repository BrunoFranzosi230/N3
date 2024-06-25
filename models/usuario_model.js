import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Usuario = db. define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Usuario;