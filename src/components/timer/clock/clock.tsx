import style from './Clock.module.scss';

// Aqui abaixo, estamos tipificando a prop "tempo" dentro de uma interface
interface Props {
    tempo: number | undefined;
}
// Na linha abaixo, o tempo = 0 tá informando que se o valor do tempo não for passado, o valor padrão será 0, e não undefined.
export default function Relogio({ tempo = 0 }: Props) {
    const minutos = Math.floor(tempo / 60); // <---- Math.floor pega o valor inteiro arredondando pra baixo e desprezando o resto
    const segundos = tempo % 60; // <---- O % pega o resto desprezado pela divisão, como já sabemos
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

    return (
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}

// Nota:
// o ".padStart" é uma função do JS que você determina, no primeiro parâmetro, o length mínimo que se deve encontrar e, 
// no segundo parâmetro, qual caractere vai ser adicionado caso não tenha esse length mínimo