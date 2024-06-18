import express from "express";
import { getProprietario } from "../controller/proprietario_controller.js";

const router = express.Router()

router.get('/proprietario', getProprietario)

export default router