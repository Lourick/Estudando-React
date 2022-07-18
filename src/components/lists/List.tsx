import Itens from './item/itens'
import style from './Lists.module.scss'
import { ITarefa } from '../../types/tarefa'

function Lista({ tarefas }: {tarefas: ITarefa[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Itens key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;