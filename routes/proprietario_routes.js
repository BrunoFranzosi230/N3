import express from "express";
import { getProprietario, createProprietario, updateProprietario, deleteProprietario } from "../controller/proprietario_controller.js";

const router = express.Router();

router.get('/proprietario', getProprietario);
router.post('/proprietario', createProprietario);
router.put('/proprietario/:id', updateProprietario);
router.delete('/proprietario/:id', deleteProprietario);

export default router;
