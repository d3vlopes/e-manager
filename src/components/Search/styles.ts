import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 4.6rem;
    border-radius: 10px;
    padding: 0.8rem 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.neutral['700']};
    border: 1px solid ${theme.colors.neutral['600']};

    &::placeholder {
      color: ${theme.colors.neutral['600']};
    }

    @media only screen and (min-width: 768px) {
      & {
        min-width: 44.6rem;
      }
    }
  `}
`
