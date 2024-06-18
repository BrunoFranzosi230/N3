import proprietario from "../models/proprietario_model.js"

export const getProprietario = async (req, res) => {
    try {
        const proprietarios = await proprietario.findAll()
        res.send(proprietarios)
        
        
    } catch (e) {
        
        console.log("Erro ao acessar a tabela proprietario",e)

    }
}