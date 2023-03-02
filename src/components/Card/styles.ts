import styled, { css, DefaultTheme } from 'styled-components'

import { CardProps } from '.'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.background.primary['500']};
    padding: 2.5rem 1.6rem;
    border-radius: 4px;
    box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.15);

    header > h2 {
      font-size: ${theme.font.sizes.lg};
      font-weight: ${theme.font.weight.semi};

      @media only screen and (min-width: 1200) {
        & {
          font-size: ${theme.font.sizes.xl};
        }
      }
    }
  `}
`

export const Divider = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.neutral['100']};
    margin: 1.4rem 0 2.4rem;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

type ProductProps = Pick<CardProps, 'variant'>

const productModifiers = {
  'down-stock': (theme: DefaultTheme) => css`
    color: ${theme.colors.red['500']};
  `,

  'more-expensive': (theme: DefaultTheme) => css`
    span {
      color: ${theme.colors.primary['500']};
    }

    p {
      color: ${theme.colors.green['500']};
    }
  `,

  'add-products': (theme: DefaultTheme) => css``,
}

export const Product = styled.div<ProductProps>`
  ${({ theme, variant }) => css`
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 2.4rem;
    }

    ${!!variant && productModifiers[variant](theme)};
  `}
`

export const AddProduct = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16.7rem 0 13.5rem;

    span {
      font-size: ${theme.font.sizes['2xl']};
      font-weight: ${theme.font.weight.semi};
      margin-bottom: 0.8rem;
    }

    p {
      font-size: ${theme.font.sizes['lg']};
    }
  `}
`
