import styled, { css } from 'styled-components'
import { NavLink as ReactRouterNavLink } from 'react-router-dom'

export const MobileNav = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary['500']};
    width: 100%;
    height: 4rem;
    display: none;

    @media only screen and (max-width: 450px) {
      & {
        display: flex;
        align-items: center;
      }
    }

    button {
      color: ${theme.colors.neutral['100']};
      background: transparent;
      outline: none;
      border: none;
      margin: 0 1rem;
    }
  `}
`

type NavProps = {
  transaction: boolean
}

const navModifiers = {
  transaction: () => css`
    transform: translateX(-100%);
  `,
}

export const Nav = styled.nav<NavProps>`
  ${({ theme, transaction }) => css`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 15%;
    min-height: 100vh;
    background-color: ${theme.colors.primary['500']};
    padding: 2rem 1rem 1rem 1rem;
    transition: transform 1s;

    @media only screen and (max-width: 768px) {
      & {
        width: 40%;
        padding: 10px;
      }
    }

    @media only screen and (max-width: 450px) {
      & {
        width: 70%;
        top: 38px;
        min-height: calc(100vh - 38px);
      }
    }

    ${transaction && navModifiers.transaction()}
  `}
`

export const NavBtn = styled.button`
  ${({ theme }) => css`
    position: absolute;
    transform: translateX(38px);
    top: 2rem;
    right: 0;
    width: 4rem;
    height: 6rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary['500']};
    outline: none;
    border: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    color: ${theme.colors.neutral['100']};

    @media only screen and (max-width: 450px) {
      & {
        display: none;
      }
    }
  `}
`

export const Logo = styled.img`
  width: 100%;
  max-width: 21.3rem;
  margin-top: 1.6rem;

  @media only screen and (max-width: 450px) {
    & {
      max-width: 15.3rem;
    }
  }
`

export const NavLinks = styled.div`
  margin-top: 1.6rem;
`

export const NavLink = styled(ReactRouterNavLink)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.neutral['100']};
    text-decoration: none;
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 0.5rem;

    span {
      margin-left: 1rem;
    }
  `}
`
