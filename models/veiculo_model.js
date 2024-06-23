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
    placa:{
        type: Sequelize.STRING(10)
        
    },
    modelo:{
        type: Sequelize.STRING(100)
    },
    preco:{
        type: Sequelize.DECIMAL(10,2)
    },
    proprietario_id:{
        type: Sequelize.INTEGER
    },
    tipo_id:{
        type:Sequelize.INTEGER
    }


},{
    freezeTableName: true,
    timestamps:false
});

Veiculo.associate = (models) => {
    Veiculo.hasMany(models.Proprietario, 
        {foreignKey: 'proprietario_id', as:  'Proprietario'})
    Veiculo.hasMany(models.TipoVeiculo, 
        {foreignKey: 'tipo_id', as: 'TipoVeiculo'})
}

Veiculo.belongsTo(Proprietario, {foreignKey: 'proprietario_id', allowNull: true})
Veiculo.belongsTo(TipoVeiculo, {foreignKey: 'tipo_id', allowNull: true})

export default Veiculo