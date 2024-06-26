import Usuario from "../models/usuario_model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv-safe";

dotenv.config();

export const createUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    
    // Adicionando logs para depuração
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);

    try {
        const usuario = await Usuario.create({ nome, email, senha });
        res.json(usuario);
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).json({ error: "Erro ao criar usuário" });
    }
};

export const login = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const usuario = await Usuario.findOne({ where: { email, senha } });
        if (usuario) {
            const token = jwt.sign({ id: usuario.id }, process.env.SECRET, {
                expiresIn: 300
            });
            res.json({ auth: true, token: token });
        } else {
            res.status(401).json({ message: "Login inválido!" });
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        res.status(500).json({ error: "Erro ao fazer login" });
    }
};

export const logout = (req, res) => {
    res.json({ auth: false, token: null });
};

export const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: "Não há token" });
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: "Erro com a autenticação" });
        req.userId = decoded.id;
        next();
    });
};
