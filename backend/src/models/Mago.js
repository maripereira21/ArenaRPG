import { Personagem } from "./Personagem.js";

export class Mago extends Personagem {
    constructor(nome, vida, ataque, defesa, mana = 30, emoji = "🧙") {
        super(nome, vida, ataque, defesa, emoji);
        this.classe = "Mago";
        this.mana = mana; // recurso exclusivo do Mago
    }

    // Método novo: gasta mana e causa dano que IGNORA a defesa do alvo.
    lancarMagia(alvo) {
        const custo = 10;
        if (this.mana < custo) {
            return `${this.nome} está sem mana e ataca com o cajado... ${super.atacar(alvo)}`;
        }
        this.mana -= custo;
        const dano = this.ataque + 5;
        alvo.vida = Math.max(0, alvo.vida - dano); // dano direto, sem defesa
        return `${this.nome} lançou uma magia em ${alvo.nome}: ${dano} de dano! (mana: ${this.mana})`;
    }
}

export class Mago extends Personagem {
    lancarMagia(alvo) {
        // ...
        this.mana -= custo;
        const dano = this.ataque + 5;
        alvo.vida = Math.max(0, alvo.vida - dano); // dano direto, sem defesa
        return `${this.nome} lançou uma magia em ${alvo.nome}: ${dano} de dano! (mana: ${this.mana})`;
    }

    resetar() {
        super.resetar();
        this.mana = 40;
    }

    atacar(alvo) {
        if (this.mana >= 10) {
            return this.lancarMagia(alvo);
        }
        return super.atacar(alvo);
    }
}

export class Mago extends Personagem {
    lancarMagia(alvo) {
        // ...
    }

    resetar() {
        super.resetar();
        this.mana = 40;
    }

    atacar(alvo) {
        if (this.mana >= 10) {
            return this.lancarMagia(alvo);
        }
        return super.atacar(alvo);
    }

    static criarAprendiz(nome) {
        return new Mago(nome, 80, 10, 3, 40, "🧙");
    }
}
