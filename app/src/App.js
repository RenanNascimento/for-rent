import React from 'react'
import Container from './components/Container/Container'

import * as El from './App.style'

const App = () => (
  <El.App>
    <El.Title>
      Preencha os dados abaixo <br />
      e veja quanto será o valor <br />
      do aluguel
    </El.Title>
    <Container />
  </El.App>
)

export default App
