import styled, { css } from 'styled-components'

export const Loading = styled.div`
  ${css`
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      top: -8px;
      right: -8px;
      width: 24px;
      height: 24px;
      margin: 8px;
      border: 4px solid #191f43;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #191f43 transparent transparent transparent;
    }

    div:nth-child(1) {
      animation-delay: -0.45s;
    }

    div:nth-child(2) {
      animation-delay: -0.3s;
    }

    div:nth-child(3) {
      animation-delay: -0.15s;
    }

    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `};
`
