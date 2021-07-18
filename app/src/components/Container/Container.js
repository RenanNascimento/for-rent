import React, { useState } from 'react'
import Form from '../Form/Form'
import Prediction from '../Prediction/Prediction'

import * as El from './Container.style'

const Container = () => {
  const [isShowForm, setIsShowForm] = useState(true)
  const [rentAmount, setRentAmount] = useState(0)

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
      .then((data) => {
        setRentAmount(data.prediction)
        setIsShowForm(false)
      })
      .catch((err) => console.log(err))
  }

  return (
    <El.Wrapper>
      <El.Container>
        {isShowForm ? (
          <Form getPredict={(data) => getPredict(data)} />
        ) : (
          <Prediction
            rentAmount={rentAmount}
            goBack={() => setIsShowForm(true)}
          />
        )}
      </El.Container>
    </El.Wrapper>
  )
}

export default Container
