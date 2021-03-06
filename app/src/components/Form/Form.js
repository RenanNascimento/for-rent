import React, { useState } from 'react'
import Loading from '../Loading/Loading'

import NumberFormat from 'react-number-format'
import { useForm } from 'react-hook-form'

import * as El from './Form.style'

const Form = ({ getPredict }) => {
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit } = useForm()

  const numStrToFloat = (money) => parseFloat(money.replace(',', '.'))

  const strToBoolean = (value) => (value === 'true' ? true : false)

  const onSubmit = (data) => {
    setIsLoading(true)

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
      // propertyTax
      numStrToFloat(data.propertyTax || '0'),
      // fireInsurance
      numStrToFloat(data.fireInsurance || '0'),
    ]

    const catAttr = [
      // city
      data.city,
      // pet
      strToBoolean(data.pet),
      // furniture
      strToBoolean(data.furniture),
    ]

    const dataDict = {
      numAttr,
      catAttr,
    }

    const dataStr = JSON.stringify(dataDict)

    getPredict(dataStr)
  }

  return (
    <>
      <El.Title>
        Preencha os dados abaixo <br />
        e veja quanto será o valor <br />
        do aluguel
      </El.Title>
      <El.Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <El.FieldGroup>
          {/* city */}
          <El.Field>
            <El.Label htmlFor="city">Cidade</El.Label>
            <El.Select id="city" {...register('city')}>
              <El.Option value="1">São Paulo</El.Option>
              <El.Option value="2">Rio de Janeiro</El.Option>
              <El.Option value="3">Belo Horizonte</El.Option>
              <El.Option value="4">Porto Alegre</El.Option>
              <El.Option value="5">Campinas</El.Option>
            </El.Select>
          </El.Field>

          {/* rooms */}
          <El.Field>
            <El.Label htmlFor="rooms">Qtde quartos</El.Label>
            <El.Input
              id="rooms"
              type="number"
              min="0"
              step="1"
              required
              {...register('rooms')}
            />
          </El.Field>

          {/* area */}
          <El.Field>
            <El.Label htmlFor="area">
              Área (m<sup>2</sup>)
            </El.Label>
            <NumberFormat
              id="area"
              allowNegative={false}
              decimalSeparator=","
              required
              {...register('area')}
            />
          </El.Field>

          {/* fire insurance */}
          <El.Field>
            <El.Label htmlFor="fire-insurance">Seguro incêndio (R$)</El.Label>
            <NumberFormat
              id="fire-insurance"
              allowNegative={false}
              decimalSeparator=","
              required
              {...register('fireInsurance')}
            />
          </El.Field>
        </El.FieldGroup>

        <El.FieldGroup>
          {/* pet */}
          <El.Field>
            <El.Label htmlFor="pet">Aceita pet</El.Label>
            <El.Select id="pet" {...register('pet')}>
              <El.Option value="true">Sim</El.Option>
              <El.Option value="false">Não</El.Option>
            </El.Select>
          </El.Field>

          {/* bathroom */}
          <El.Field>
            <El.Label htmlFor="rooms">Qtde banheiros</El.Label>
            <El.Input
              id="bathroom"
              type="number"
              min="0"
              step="1"
              required
              {...register('bathroom')}
            />
          </El.Field>

          {/* hoa */}
          <El.Field>
            <El.Label htmlFor="hoa">Condomínio (R$)</El.Label>
            <NumberFormat
              id="hoa"
              allowNegative={false}
              decimalSeparator=","
              required
              {...register('hoa')}
            />
          </El.Field>

          {/* property tax */}
          <El.Field>
            <El.Label htmlFor="property-tax">IPTU (R$)</El.Label>
            <NumberFormat
              id="property-tax"
              allowNegative={false}
              decimalSeparator=","
              required
              {...register('propertyTax')}
            />
          </El.Field>
        </El.FieldGroup>

        <El.FieldGroup>
          {/* furniture */}
          <El.Field>
            <El.Label htmlFor="furniture">Mobiliado</El.Label>
            <El.Select id="furniture" {...register('furniture')}>
              <El.Option value="false">Não</El.Option>
              <El.Option value="true">Sim</El.Option>
            </El.Select>
          </El.Field>

          {/* parking spaces */}
          <El.Field>
            <El.Label htmlFor="rooms">Qtde vagas estac.</El.Label>
            <El.Input
              id="parking-spaces"
              type="number"
              min="0"
              step="1"
              required
              {...register('parkingSpaces')}
            />
          </El.Field>

          {/* floor */}
          <El.Field>
            <El.Label htmlFor="floor">Andar</El.Label>
            <El.Input
              id="floor"
              type="number"
              min="0"
              step="1"
              required
              {...register('floor')}
            />
          </El.Field>
        </El.FieldGroup>
      </El.Form>
      <El.ButtonWrapper>
        {(isLoading && <Loading />) || (
          <El.Button type="submit" form="form">
            Calcular valor
          </El.Button>
        )}
      </El.ButtonWrapper>
      <El.AboutLabel>Sobre</El.AboutLabel>
      <El.About>
        Este projeto tem como objetivo interagir com um modelo de regressão
        criado para predizer o valor do alugel em algumas cidades do Brasil.
        Mais informações podem ser encontradas{' '}
        <a href="https://github.com/RenanNascimento/for-rent" target="_blank" rel="noreferrer">
          aqui
        </a>
        .
      </El.About>
    </>
  )
}

export default Form
