// ============================================================================
//  Heroi.js  —  HERANÇA com  extends  e  super
//  O Herói É UM Personagem, com um golpe especial.
// ============================================================================

// PASSO 1 — Importe a classe base:
//   import { Personagem } from "./Personagem.js";
import { Personagem } from "./Personagem";


// PASSO 2 — Declare  export class Heroi extends Personagem { ... }
//           "extends" faz herdar TUDO de Personagem.
export class heroi extends Personagem {
  constructor(nome, vida, ataque, defesa, emoji = "🦸") {
    super(nome, vida, ataque, defesa, emoji);
    this.classe = "Heroi";
    this.especialUsado = false; 
  } 
}

  // PASSO 3 — constructor(nome, vida, ataque, defesa, emoji = "🦸")
  //   Primeiro chame  super(nome, vida, ataque, defesa, emoji);
  //   (super chama o constructor da mãe e PRECISA vir antes de usar "this")
  //   Depois:  this.classe = "Herói";  e  this.especialUsado = false;


  // PASSO 4 — Método golpeEspecial(alvo):
  //   se this.especialUsado for true -> retorne this.atacar(alvo) (ataque normal)
  //   senão: this.especialUsado = true;
  //          const danoReal = alvo.receberDano(this.ataque * 2);
  //          retorne `✨ ${this.nome} usou GOLPE HEROICO em ${alvo.nome}: ${danoReal} de dano!`
  golpeEspecial(alvo) {
    if (this.especialUsado) {
      return this.atacar(alvo);
    } else {
      this.especialUsado = true;
      const danoReal = alvo.receberdano(this.ataque * 2);
      return `✨ ${this.nome} usou GOLPE HEROICO em ${alvo.nome}: ${danoReal} de dano!`;
    }
  }
  


  // PASSO 5 — Override do resetar():
  //   super.resetar();          // repõe a vida (o que a mãe já faz)
  //   this.especialUsado = false;
  resetar() {
    super.resetar();
    this.especialUsado = false;
  }


  // PASSO 6 — Override do atacar(alvo):
  //   if (Math.random() < 0.4) return this.golpeEspecial(alvo);
  //   return super.atacar(alvo);   // "super" chama a versão da mãe
  atacar(alvo) {
    if(Math.random() < 0.4) {
      return this.golpeEspecial(alvo);
    }
    return super.atacar(alvo);
    }
  
