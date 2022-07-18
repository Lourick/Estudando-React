import React, { useState } from 'react';
import style from './App.module.scss';

import Formulario from '../components/forms/Form';
import Lista from '../components/lists/List';
import { Cronometro } from '../components/timer/timer';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
