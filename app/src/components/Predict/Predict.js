import React from 'react';
import * as El from './Predict.style';

const Predict = () => {

  const fetchData = async () => {
    fetch('https://for-rent.herokuapp.com/predict', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: "[[0.99184781, 0.50659956, -0.07125115, 0.34301268, -0.89925291, -0.93238932, 0.10776269, 0.03825454, 0.24106124, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0]]"
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return (
    <El.Button onClick={() => fetchData()}>
      Click here
    </El.Button>
  )
};

export default Predict;