import React from 'react';
import Predict from '../Predict/Predict';

import NumberFormat from 'react-number-format';
import { useForm } from 'react-hook-form';

import * as El from './Form.style';

const Form = () => {
  const {
    register,
    handleSubmit
  } = useForm();

  const numberToFloat = (money) => (
    parseFloat(
      money
      .replace('R$ ', '')
      .replace(' m2', '')
      .replace(',', '.')
    )
  )

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <El.Form onSubmit={handleSubmit(onSubmit)}>
      {/* city */}
      <label for='city'>Cidade</label>
      <select
        id='city'
        {...register('city')}
      >
          <option value=''>Cidade</option>
          <option value='1'>Belo Horizonte</option>
          <option value='2'>São Paulo</option>
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
        {...register('parking-spaces')}
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
        {...register('rent-amount')}
      />

      {/* property tax */}
      <label for='property-tax'>IPTU</label>
      <NumberFormat
        id='property-tax'
        allowNegative={false}
        decimalSeparator=','
        prefix='R$ '
        {...register('property-tax')}
      />

      {/* fire insurance */}
      <label for='fire-insurance'>Seguro incêndio</label>
      <NumberFormat
        id='fire-insurance'
        allowNegative={false}
        decimalSeparator=','
        prefix='R$ '
        {...register('fire-insurance')}
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
      <Predict />
    </El.Form>
  )
};

export default Form;
