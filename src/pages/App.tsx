import React from 'react';
import style from './App.module.scss';

import Formulario from '../components/forms/Form';
import Lista from '../components/lists/List';
import { Cronometro } from '../components/timer/timer';



function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
