import { ITarefa } from '../../../types/tarefa'
import style from '../Lists.module.scss'

export default function Itens({ tarefa, tempo, selecionado, completado, id }: ITarefa) {
    console.log('item atual:', { tarefa, tempo, selecionado, completado, id });
    return (
        <li className={style.item}>
        <h3> {tarefa} </h3>
        <p> {tempo} </p>
    </li>
    )
}