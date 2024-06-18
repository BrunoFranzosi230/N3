import veiculo from "../models/veiculo_model.js"

export const getVeiculo = async (req, res) => {
    try{
        const veiculos = await veiculo.findAll()
        res.send(veiculos)

    }catch (e){
        console.log("Erro ao acessar a tabela veiculo", e)

    }
}