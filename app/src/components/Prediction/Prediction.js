import React from 'react'

import * as El from './Prediction.style'

const Prediction = ({ rentAmount, goBack }) => {
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <>
      <El.Title>Valor do aluguel:</El.Title>
      <El.PredictValue>{formatter.format(rentAmount)}</El.PredictValue>
      <El.Button onClick={() => goBack()}>Voltar</El.Button>
    </>
  )
}

export default Prediction
