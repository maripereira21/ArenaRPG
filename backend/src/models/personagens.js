// ============================================================================
//  personagens.js  —  Nosso "banco de dados" em memória (um array)
//  Aqui CRIAMOS objetos com  new  a partir das classes.
// ============================================================================

// PASSO 1 — Importe as três classes:
//   import { Personagem } from "./Personagem.js";
//   import { Heroi } from "./Heroi.js";
//   import { Mago } from "./Mago.js";


// PASSO 2 — Crie e exporte o array de personagens usando  new:
// export const personagens = [
//   new Heroi("Aragon", 120, 22, 6, "🦸"),
//   new Mago("Gandalf", 90, 20, 3, 40, "🧙"),
//   new Heroi("Valquíria", 110, 25, 5, "⚔️"),
//   Mago.criarAprendiz("Merlin"),          // criado pelo MÉTODO ESTÁTICO (sem "new"!)
//   new Personagem("Golem", 150, 16, 10, "🗿"),
//   new Personagem("Goblin", 70, 20, 2, "👺"),
// ];

import { Personagem } from "./Personagem.js";
import { Heroi } from "./Heroi.js";
import { Mago } from "./Mago.js";

export const personagens = [
    new Heroi("Aragorn", 120, 22, 6, "🤺"),
    new Mago("Gandalf", 90, 20, 3, 40, "🧙"),
    new Heroi("Valquíria", 110, 25, 5, "⚔️"),
    Mago.criarAprendiz("Merlin"), // criado pelo MÉTODO ESTÁTICO (sem "new")
    new Personagem("Golem", 150, 16, 10, "🗿"),
    new Personagem("Goblin", 70, 20, 2, "👺"),
];
