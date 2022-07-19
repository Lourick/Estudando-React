import React, { useState } from 'react';
import style from './App.module.scss';

import Formulario from '../components/forms/Form';
import Lista from '../components/lists/List';
import { Cronometro } from '../components/timer/timer';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      // Na linha anterior, apenas retorna uma tarefa sem fazer nada.
      // Na linha 20, não pode ser apenas ": true" senão iria deixar todas true. 
      // Com essa condição estabelecida, irá mudar para "true" apenas se o id da tarefa mapaeada for igual à selecionada.
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
