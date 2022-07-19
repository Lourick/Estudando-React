// Função para converter o tempo total em apenas segundos
export function tempoParaSegundos(tempo: string) {
    // Esse = '0' serve para informar que o valor padrão estabelecido é zero, para caso o usuário não escolha nenhum valor não vir como null
    const [horas = '0', minutos ='0', segundos = '0'] = tempo.split(":");

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;
    return horasEmSegundos + minutosEmSegundos + Number(segundos);


}