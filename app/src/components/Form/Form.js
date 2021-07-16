import React from 'react';

import NumberFormat from 'react-number-format';
import { useForm } from 'react-hook-form';

import * as El from './Form.style';

const Form = () => {
  const {
    register,
    handleSubmit
  } = useForm();

  const numToFloat = (money) => (
    parseFloat(
      money
      .replace('R$ ', '')
      .replace(' m2', '')
      .replace(',', '.')
    )
  )

  const getPredict = async (dataToPredict) => {
    fetch('https://for-rent.herokuapp.com/predict', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: `[[${dataToPredict.toString()}]]`
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  const onSubmit = (data) => {
    const dataTransformed = {
      area: numToFloat(data.area) || 0,
      rooms: data.rooms === '' ? 0 : parseFloat(data.rooms),
      bathroom: data.bathroom === '' ? 0 : parseFloat(data.bathroom),
      parkingSpaces: data.parkingSpaces === '' ? 0 : parseFloat(data.parkingSpaces),
      hoa: numToFloat(data.hoa) || 0,
      floor: data.floor === '' ? 0 : parseFloat(data.floor),
      rentAmount: numToFloat(data.rentAmount) || 0,
      propertyTax: numToFloat(data.propertyTax) || 0,
      fireInsurance: numToFloat(data.fireInsurance) || 0,
      city1: data.city === '1' ? 1 : 0,
      city2: data.city === '2' ? 1 : 0,
      city3: data.city === '3' ? 1 : 0,
      city4: data.city === '4' ? 1 : 0,
      city5: data.city === '5' ? 1 : 0,
      animal1: data.animal ? 1 : 0,
      animal2: data.animal ? 0 : 1,
      furniture1: data.furniture ? 1 : 0,
      furniture2: data.furniture ? 0 : 1,
    }

    const dataStandardScaler = [
      dataTransformed.area,
      dataTransformed.rooms,
      dataTransformed.bathroom,
      dataTransformed.parkingSpaces,
      dataTransformed.hoa,
      dataTransformed.floor,
      dataTransformed.rentAmount,
      dataTransformed.propertyTax,
      dataTransformed.fireInsurance,
      dataTransformed.city1,
      dataTransformed.city2,
      dataTransformed.city3,
      dataTransformed.city4,
      dataTransformed.city5,
      dataTransformed.animal1,
      dataTransformed.animal2,
      dataTransformed.furniture1,
      dataTransformed.furniture2,
    ]

    getPredict(dataStandardScaler)
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
