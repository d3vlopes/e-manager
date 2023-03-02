import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Omit<ButtonProps, 'children'>

const wrapperModifiers = {
  small: () => css`
    height: 2.4rem;
    width: 12rem;
    padding: 0.8rem;
  `,

  medium: () => css`
    height: 4.4rem;
    padding: 0.8rem;
  `,

  large: () => css`
    height: 5.7rem;
    padding: 1.6rem;
  `,

  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary['500']};
  `,

  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.neutral['600']};
  `,

  danger: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.red['500']};
  `,

  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green['500']};
  `,
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, color }) => css`
    align-items: center;
    border: none;
    border-radius: 10px;
    display: inline-flex;
    justify-content: center;
    transition: filter ${theme.transition.fast};
    width: 20.2rem;

    &:hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;

      &:hover {
        filter: brightness(1);
      }
    }

    span {
      color: ${theme.colors.light};
      font-weight: ${theme.font.weight.semi};
      letter-spacing: 0.05rem;
    }

    ${!!size && wrapperModifiers[size]};
    ${!!color && wrapperModifiers[color](theme)};
  `}
`
