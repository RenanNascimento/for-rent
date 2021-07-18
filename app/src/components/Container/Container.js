import React from 'react'
import Form from '../Form/Form'

import * as El from './Container.style'

const Container = () => {
  const getPredict = async (data) => {
    fetch('https://for-rent.herokuapp.com/predict', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: data,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }

  return (
    <El.Wrapper>
      <El.Container>
        <El.Title>
          Preencha os dados abaixo <br />
          e veja quanto será o valor <br />
          do aluguel
        </El.Title>
        <Form getPredict={(data) => getPredict(data)} />
      </El.Container>
    </El.Wrapper>
  )
}

export default Container
