import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[600]};
    font-size: ${theme.font.sizes.lg};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    border: none;
    border-radius: 0.4rem;
    display: block;
    margin-top: 0.8rem;
    max-height: 5.4rem;
    padding: 2.4rem 1.6rem;
    width: 100%;

    &:placeholder {
      color: ${theme.colors.neutral['300']};
    }
  `}
`
