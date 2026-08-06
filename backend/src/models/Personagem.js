// ============================================================================
//  Personagem.js  —  A CLASSE BASE
//  👉 Vamos digitar JUNTOS. Siga os passos marcados com  // PASSO
//  Dica: como usamos "export", este arquivo é um MÓDULO ES e já roda em
//        Strict Mode automaticamente (não precisa escrever "use strict").
// ============================================================================

// PASSO 1 — Declare a classe base e já exporte ela.
//           Lembre: nome de classe começa com MAIÚSCULA.
export class Personagem {
  // PASSO 2 — Crie o constructor com os atributos do personagem.
  //           Parâmetros: nome, vida, ataque, defesa, emoji (padrão "🧍")
constructor(nome, vida, ataque, defesa, emoji = "🧍") {
  this.nome = nome;
  export class Personagem {
    constructor(nome, vida, ataque, defesa, emoji = "🧍") {
      this.nome = nome;
      this.vida = vida;
      this.vidaMax = vida;
      this.ataque = ataque;
      this.defesa = defesa;
      this.emoji = emoji;
      this.classe = "Personagem";
    }

    estaVivo() {
      return this.vida > 0;
    }

    receberDano(dano) {
      const danoReal = Math.max(1, dano - this.defesa);
      this.vida = Math.max(0, this.vida - danoReal);
      return danoReal;
    }

    atacar(alvo) {
      const danoReal = alvo.receberDano(this.ataque);
      return `${this.emoji} ${this.nome} atacou ${alvo.nome} causando ${danoReal} de dano!`;
    }

    resetar() {
      this.vida = this.vidaMax;
    }

    static paraLista(personagens) {
      return personagens.map((p, indice) => ({
        id: indice,
        nome: p.nome,
        classe: p.classe,
        vida: p.vidaMax,
        ataque: p.ataque,
        defesa: p.defesa,
        emoji: p.emoji,
      }));
    }
  }