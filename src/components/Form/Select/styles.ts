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

export const Select = styled.select`
  ${({ theme }) => css`
    appearance: none;
    border: 0;
    background: url(https://res.cloudinary.com/dbnq26wqe/image/upload/v1635462946/arrow-down-2_ifgtuz.svg)
        no-repeat right 0.8rem center/2rem,
      linear-gradient(to left, rgba(255, 255, 255), rgba(255, 255, 255));
    border-radius: 0.4rem;
    cursor: pointer;
    font: inherit;
    height: 5.4rem;
    min-width: 12rem;
    outline: 0;
    padding: 0 1.6rem;
    width: 100%;
    margin-top: 0.8rem;

    &:focus {
      outline: none;
      border: 1px solid ${theme.colors.dark};
    }

    &::-ms-expand {
      display: none;
    }
  `}
`
