import styled from 'styled-components'

export const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  color: #191f43;

  @media (max-width: 640px) {
    font-size: 24px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

export const FieldGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 4px;
  margin: 0px 8px;

  input {
    outline: 0;
    border-width: 0 0 2px;
    border-color: #a7c2f0;
    background-color: transparent;

    &:focus {
      border-color: #3650f7;
    }
  }
`

export const Field = styled.div`
  display: flex;
  width: 100%;
  margin: 4px 0;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 14px;
  color: #191f43;
  margin-top: 8px;
  margin-bottom: 2px;
`

export const Select = styled.select`
  outline: 0;
  font-size: 16px;
  border-color: #a7c2f0;
  border-width: 0 0 2px;
  background-color: transparent;

  &:focus {
    border-color: #3650f7;
  }
`

export const Option = styled.option``

export const Input = styled.input`
  font-size: 16px;
`

export const ButtonWrapper = styled.div`
  margin: 24px 0;
`

export const Button = styled.button`
  cursor: pointer;
  font-size: 18px;
  border: none;
  border-radius: 24px;
  padding: 8px 16px;
  background-color: #191f43e6;
  color: white;

  &:hover {
    background-color: #191f43;
  }
`

export const AboutLabel = styled.p`
  font-size: 24px;
  color: #191f43;
  margin-top: 56px;
  margin-bottom: 0;

  @media (max-width: 640px) {
    margin-top: 32px;
  }
`

export const About = styled.p`
  text-align: center;
  font-size: 16px;
  color: #191f43;
  max-width: 600px;

  a {
    text-decoration: none;
  }
`
