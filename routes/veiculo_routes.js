import express from "express"
import { createVeiculo } from "../controller/veiculo_controller"

const router = express.Router()

router.post('/veiculo', createVeiculo)

export default router