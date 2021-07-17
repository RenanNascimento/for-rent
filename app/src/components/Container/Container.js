import React from 'react'
import Form from '../Form/Form'

import * as El from './Container.style'

const Container = () => {
  return (
    <El.Wrapper>
      <El.Container>
        <El.Title>
          Preencha os dados abaixo <br />
          e veja quanto será o valor <br />
          do aluguel
        </El.Title>
        <Form />
      </El.Container>
    </El.Wrapper>
  )
}

export default Container
