export function simularBatalha(lutador1, lutador2) {
    const log = [];
    log.push(`⚔️ ${lutador1.nome} (${lutador1.classe}) VS ${lutador2.nome} (${lutador2.classe})!`);

    let turno = 1;

    while (lutador1.estaVivo() && lutador2.estaVivo() && turno <= 10) {
        log.push(`-- Turno ${turno} --`);
        log.push(lutador1.atacar(lutador2));
        if (!lutador2.estaVivo()) break;
        log.push(lutador2.atacar(lutador1));
        turno++;
    }

    const vencedor = lutador1.vida > lutador2.vida ? lutador1 : lutador2;
    log.push(`💀 ${lutador1.nome}: ${lutador1.vida} HP | ${lutador2.nome}: ${lutador2.vida} HP`);

    return { vencedor: `${vencedor.emoji} ${vencedor.nome}`, log };
}