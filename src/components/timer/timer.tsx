import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utility/time";
import { ITarefa } from "../../types/tarefa";
import Botao from "../button/Botao";
import Relogio from "./clock/clock";
import style from './Timer.module.scss'

interface Props {
    // Aqui fica "ITarefa ou undefined" porque. lá em App.tsx, na linha 12, informa que o tipo de selecionado é esse quando passa o mouse por cima, e a tipificação tem que ser igual
    // Afinal, o timer no início não terá nada selecionado, iniciando como undefined, e só mudará para as props de ITarefa quando o usuário as selecionar
    selecionado: ITarefa | undefined
}

export function Cronometro({ selecionado }: Props) {

    //Na linha abaixo, estou criando um estado para decrementar o tempo até zero, e após isso mudar a props de completado para true:
    const [tempo, setTempo] = useState<number>();
    //Na linha acima, foi necessário tipificar o State para number porque ele não espera um argumento desse tipo a menos que você informe. Sem isso, a função abaixo não funcionaria para ele

    //O useEffect aceita 2 parâmetros: primeiro uma função, e depois a variável de dependência que causará a execução da função do primeiro parâmetro
    useEffect (() => {
        if(selecionado?.tempo)
        setTempo(tempoParaSegundos(selecionado.tempo))
    //Logo acima, a condicional diz que se existir um "selecionado" e sua prop "tempo", executará a função "tempoParaSegundos" para converter em segundos e guardará seu retorno em "setTempo"
    }, [selecionado])

    //Na linha abaixo, temos que o contador nunca será undefined, porque mais uma vez o valor padrão caso nada seja passado será 0
    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
        }, 1000)
    }
    
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={style.relogioWrapper}>
                {/* Abaixo, passamos a prop tempo para Relogio, mas só funciona após tipificar, dentro do Relogio (clock.tsx), que ela é do tipo number ou undefined */}
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Começar!
            </Botao>
        </div>
    )
}


// Notas:
// useEffect funciona como componentDidMount (para class components), executando assim que o componente é renderizado
// setTimeout é uma função nativa do JS, onde o primeiro parâmetro será um função, e o segundo será o tempo em milisegundos em que essa função será executada