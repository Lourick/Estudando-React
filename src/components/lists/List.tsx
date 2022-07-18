import React from 'react';
import { isTemplateExpression } from 'typescript';
import Itens from './item/itens'
import style from './Lists.module.scss'

function Lista() {

    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }

    ]

    return (
        <aside>
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