import express from "express";
import { createVeiculo, getVeiculosByProprietario, getVeiculosByTipo, updateVeiculo, deleteVeiculo, getVeiculos } from "../controller/veiculo_controller.js";

const router = express.Router();

router.post('/', createVeiculo);
router.get('/', getVeiculos);
router.get('/proprietario/:proprietario_id', getVeiculosByProprietario);
router.get('/tipo/:tipo', getVeiculosByTipo);
router.put('/:id', updateVeiculo);
router.delete('/:id', deleteVeiculo);

export default router;
