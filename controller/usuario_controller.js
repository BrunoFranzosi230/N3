import Usuario from "../models/usuario_model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv-safe";

dotenv.config();

export const createUsuario = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const usuario = await Usuario.create({ email, senha });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar usuário" });
    }
};

export const login = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        if (senha !== usuario.senha) {
            return res.status(401).json({ message: "Senha inválida" });
        }
        const token = jwt.sign({ id: usuario.id }, process.env.SECRET, {
            expiresIn: 300
        });
        res.json({ auth: true, token });
    } catch (error) {
        res.status(500).json({ message: "Erro ao fazer login" });
    }
};

export const logout = (req, res) => {
    res.json({ auth: false, token: null });
};

export const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: "não há token" });
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(500).json({ auth: false, message: "Erro com a autenticação" });
        req.userId = decoded.id;
        next();
    });
};
