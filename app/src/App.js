import React from 'react';
import Form from './components/Form/Form';

import * as El from './App.style';

const App = () => (
  <El.App>
    <El.Title>
      Preencha os dados abaixo <br/>
      e veja quanto será o valor <br/>
      do aluguel
    </El.Title>
    <Form />
  </El.App>
);

export default App;
