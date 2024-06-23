import Veiculo from "../models/veiculo_model.js";
import Tipo from "../models/tipo_model.js";

const associarTipoVeiculo = async (preco) => {
    if (preco < 50000) {
        return await Tipo.findOne({ where: { nome_tipo: 'Popular' } });
    } else if (preco < 100000) {
        return await Tipo.findOne({ where: { nome_tipo: 'Luxo' } });
    } else {
        return await Tipo.findOne({ where: { nome_tipo: 'Super Luxo' } });
    }
};

export const createVeiculo = async (req, res) => {
    const { placa, modelo, preco, proprietario_id } = req.body;
    try {
        const tipo = await associarTipoVeiculo(preco);
        const veiculo = await Veiculo.create({
            placa,
            modelo,
            preco,
            proprietario_id,
            tipo_id: tipo.id
        });
        res.json(veiculo);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar veículo" });
    }
};

export const getVeiculosByProprietario = async (req, res) => {
    const { proprietario_id } = req.params;
    try {
        const veiculos = await Veiculo.findAll({ where: { proprietario_id } });
        res.json(veiculos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar veículos do proprietário" });
    }
};

export const getVeiculosByTipo = async (req, res) => {
    const { tipo } = req.params;
    try {
        const tipoVeiculo = await Tipo.findOne({ where: { nome_tipo: tipo } });
        if (tipoVeiculo) {
            const veiculos = await Veiculo.findAll({ where: { tipo_id: tipoVeiculo.id } });
            res.json(veiculos);
        } else {
            res.status(404).json({ error: "Tipo de veículo não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar veículos pelo tipo" });
    }
};

export const updateVeiculo = async (req, res) => {
    const { id } = req.params;
    const { placa, modelo, preco, proprietario_id } = req.body;
    try {
        const tipo = await associarTipoVeiculo(preco);
        await Veiculo.update({
            placa,
            modelo,
            preco,
            proprietario_id,
            tipo_id: tipo.id
        }, { where: { id } });
        res.json({ success: "Veículo atualizado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar veículo" });
    }
};

export const deleteVeiculo = async (req, res) => {
    const { id } = req.params;
    try {
        await Veiculo.destroy({ where: { id } });
        res.json({ success: "Veículo deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar veículo" });
    }
};

