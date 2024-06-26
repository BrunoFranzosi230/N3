import express from "express";
import { createUsuario, login, logout, verifyJWT } from '../controller/usuario_controller.js';

const router = express.Router();

router.post('/createUsuario', createUsuario);
router.post('/login', login);
router.post('/logout', logout);
router.get('/protected', verifyJWT, (req, res) => {
    res.json({ message: "Acesso permitido" });
});

export default router;
