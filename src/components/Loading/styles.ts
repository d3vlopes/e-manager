import styled, { css, keyframes } from 'styled-components'

import { LoadingProps } from '.'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Wrapper = styled.div<LoadingProps>`
  ${({ color, size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      color: ${color};
      animation: ${rotate} 2s linear infinite;
      width: ${size}rem;
      height: ${size}rem;
    }
  `}
`
