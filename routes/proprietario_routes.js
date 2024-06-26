import express from "express";
import { getProprietario, createProprietario, updateProprietario, deleteProprietario } from "../controller/proprietario_controller.js";

const router = express.Router();

router.get('/', getProprietario);
router.post('/', createProprietario);
router.put('/:id', updateProprietario);
router.delete('/:id', deleteProprietario);

export default router;
