import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 52px;

  @media (max-width: 640px) {
    margin: 0 16px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 52px;

  @media (max-width: 640px) {
    margin: 0;
  }
`
