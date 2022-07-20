import { ITarefa } from '../../../types/tarefa'
import style from './Itens.module.scss'

//Extendendo a interface Props para englobar a ITarefa
interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Itens(
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa
    }: Props) {
    return (
        <li
            // Na linha abaixo diz: a classe será style.item, mas se a props "selecionado" for "true", então a classe será style.itemSelecionado
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
            onClick={() => !completado && selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                })}>
            <h3> {tarefa} </h3>
            <p> {tempo} </p>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}