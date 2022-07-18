import style from '../Lists.module.scss'

export default function Itens({ tarefa, tempo }: {tarefa: string, tempo: string }) {
    return (
        <li className={style.item}>
        <h3> {tarefa} </h3>
        <p> {tempo} </p>
    </li>
    )
}