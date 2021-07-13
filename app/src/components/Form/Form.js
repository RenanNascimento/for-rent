import React from 'react';
import Predict from '../Predict/Predict';
import { useForm } from 'react-hook-form';

import * as El from './Form.style';

const Form = () => {
  const {
    register,
    handleSubmit
  } = useForm();


  return (
    <El.Form onSubmit={handleSubmit((data) => {
      console.log(data)
    })}>
      <select {...register("city")} id="city">
          <option value="">Cidade</option>
          <option value="1">Belo Horizonte</option>
          <option value="2">São Paulo</option>
      </select>
      <Predict />
    </El.Form>
  )
};

export default Form;
