import { Router } from "express";
import { personagens } from "../models/personagens.js";
import { Personagem } from "../models/Personagem.js";
import { simularBatalha } from "../batalha.js";

const router = Router();

router.get("/personagens", (req, res) => {
    res.json(Personagem.paraLista(personagens));
});

router.post("/batalha", (req, res) => {
    const { id1, id2 } = req.body;

    const lutador1 = personagens[id1];
    const lutador2 = personagens[id2];

    if (!lutador1 || !lutador2) {
        return res.status(400).json({ erro: "Personagem inválido" });
    }
 if (id1 === id2) {
        return res.status(400).json({ erro: "Escolha dois personagens diferentes" });
    }

    lutador1.resetar();
    lutador2.resetar();

    const resultado = simularBatalha(lutador1, lutador2);
    res.json(resultado);
});

export default router;