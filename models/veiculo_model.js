import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Proprietario from "../models/proprietario_model.js";
import TipoVeiculo from "../models/tipo_model.js";

const Veiculo = db.define('veiculo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    placa: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    modelo: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    preco: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    proprietario_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    tipo_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});

Veiculo.belongsTo(Proprietario, { foreignKey: 'proprietario_id', allowNull: true });
Veiculo.belongsTo(TipoVeiculo, { foreignKey: 'tipo_id', allowNull: true });

export default Veiculo;
