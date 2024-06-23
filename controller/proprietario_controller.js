import Proprietario from "../models/proprietario_model.js";

export const getProprietarios = async (req, res) => {
    try {
        const proprietarios = await Proprietario.findAll();
        res.json(proprietarios);
    } catch (error) {
        res.status(500).json({ error: "Erro ao acessar a tabela proprietario" });
    }
};

export const createProprietario = async (req, res) => {
    const { cpf, nome, telefone } = req.body;
    try {
        const proprietario = await Proprietario.create({ cpf, nome, telefone });
        res.json(proprietario);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar proprietário" });
    }
};

export const updateProprietario = async (req, res) => {
    const { id } = req.params;
    const { cpf, nome, telefone } = req.body;
    try {
        await Proprietario.update({ cpf, nome, telefone }, { where: { id } });
        res.json({ success: "Proprietário atualizado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar proprietário" });
    }
};

export const deleteProprietario = async (req, res) => {
    const { id } = req.params;
    try {
        await Proprietario.destroy({ where: { id } });
        res.json({ success: "Proprietário deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar proprietário" });
    }
};

