import Botao from "../button/Botao";
import Relogio from "./clock/clock";
import style from './Timer.module.scss'

export function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
}