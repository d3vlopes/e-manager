import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    display: block;
    width: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.colors.background.secondary['500']};
    color: ${({ theme }) => theme.colors.neutral['800']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.font.family};
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.sizes.base};
  }

  button {
    cursor: pointer;
  }

  .page {
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    transition: margin-left 1s;
    padding-top: 4rem;
  }

  .page-with-navbar {
    margin-left: 15%;
  }

  @media only screen and (max-width: 768px) {
    .page-with-navbar {
      width: 100%;
      margin-left: 0;
    }
  }
`
