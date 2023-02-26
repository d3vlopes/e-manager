import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    svg {
      position: absolute;
      top: 2.2rem;
      left: 1.2rem;
      z-index: 10;
      margin-left: 1.2rem;
      color: ${theme.colors.neutral['600']};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    position: relative;
    min-width: 44.4rem;
    height: 4.6rem;
    border-radius: 10px;
    padding: 0.8rem 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.neutral['700']};
    border: 1px solid ${theme.colors.neutral['600']};

    &::placeholder {
      color: ${theme.colors.neutral['600']};
    }
  `}
`
