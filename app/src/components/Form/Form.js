import React from 'react';

import NumberFormat from 'react-number-format';
import { useForm } from 'react-hook-form';

import * as El from './Form.style';

const Form = () => {
  const {
    register,
    handleSubmit
  } = useForm();

  const numStrToFloat = (money) => (
    parseFloat(
      money
      .replace('R$ ', '')
      .replace(' m2', '')
      .replace(',', '.')
    )
  )

  const getPredict = async (dataToPredict) => {
    // fetch('https://for-rent.herokuapp.com/predict', {
    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: dataToPredict
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  const onSubmit = (data) => {
    const numAttr = [
      // area
      numStrToFloat(data.area || '0'),
      // rooms
      data.rooms === '' ? 0 : parseFloat(data.rooms),
      // bathroom
      data.bathroom === '' ? 0 : parseFloat(data.bathroom),
      // parkingSpaces
      data.parkingSpaces === '' ? 0 : parseFloat(data.parkingSpaces),
      // hoa
      numStrToFloat(data.hoa || '0'),
      // floor
      data.floor === '' ? 0 : parseFloat(data.floor),
      // rentAmount
      numStrToFloat(data.rentAmount || '0'),
      // propertyTax
      numStrToFloat(data.propertyTax || '0'),
      // fireInsurance
      numStrToFloat(data.fireInsurance || '0'),
    ]

    const catAttr = [
      // city
      data.city,
      // animal
      data.animal,
      // furniture
      data.furniture
    ]

    const dataDict = {
      numAttr,
      catAttr
    }

    const dataStr = JSON.stringify(dataDict)

    getPredict(dataStr)
  }

  return (
    <El.Form onSubmit={handleSubmit(onSubmit)}>
      {/* city */}
      <label for='city'>Cidade</label>
      <select
        id='city'
        {...register('city')}
      >
          <option value='1'>São Paulo</option>
          <option value='2'>Rio de Janeiro</option>
          <option value='3'>Belo Horizonte</option>
          <option value='4'>Porto Alegre</option>
          <option value='5'>Campinas</option>
      </select>

      {/* area */}
      <label for='area'>Área</label>
      <NumberFormat
        id='area'
        allowNegative={false}
        decimalSeparator=','
        suffix=' m2'
        {...register('area')}
      />

      {/* rooms */}
      <label for='rooms'>Qtde quartos</label>
      <input
        id='rooms'
        type='number'
        min='0'
        step='1'
        {...register('rooms')}
      />

      {/* bathroom */}
      <label for='rooms'>Qtde banheiros</label>
      <input
        id='bathroom'
        type='number'
        min='0'
        step='1'
        {...register('bathroom')}
      />

      {/* parking spaces */}
      <label for='rooms'>Qtde vagas estacionamento</label>
      <input
        id='parking-spaces'
        type='number'
        min='0'
        step='1'
        {...register('parkingSpaces')}
      />

      {/* floor */}
      <label for='floor'>Andar</label>
      <input
        id='floor'
        type='number'
        min='0'
        step='1'
        {...register('floor')}
      />

      {/* hoa */}
      <label for='hoa'>Condomínio</label>
      <NumberFormat
        id='hoa'
        allowNegative={false}
        decimalSeparator=','
        prefix='R$ '
        {...register('hoa')}
      />
      
      {/* rent amount */}
      <label for='rent-amount'>Aluguel</label>
      <NumberFormat
        id='rent-amount'
        allowNegative={false}
        decimalSeparator=','
        prefix='R$ '
        {...register('rentAmount')}
      />

      {/* property tax */}
      <label for='property-tax'>IPTU</label>
      <NumberFormat
        id='property-tax'
        allowNegative={false}
        decimalSeparator=','
        prefix='R$ '
        {...register('propertyTax')}
      />

      {/* fire insurance */}
      <label for='fire-insurance'>Seguro incêndio</label>
      <NumberFormat
        id='fire-insurance'
        allowNegative={false}
        decimalSeparator=','
        prefix='R$ '
        {...register('fireInsurance')}
      />

      {/* animal */}
      <label for='animal'>Aceita pet</label>
      <input
        id='animal'
        type='checkbox'
        {...register('animal')}
      />

      {/* furniture */}
      <label for='furniture'>Mobiliado</label>
      <input
        id='furniture'
        type='checkbox'
        {...register('furniture')}
      />

    <El.Button>
      Click here
    </El.Button>

    </El.Form>
  )
};

export default Form;
