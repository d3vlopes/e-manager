import { useNavbar } from 'hooks/useNavbar'
import {
  FaAngleRight,
  FaAngleLeft,
  FaTag,
  FaThLarge,
  FaHashtag,
  FaBars,
} from 'react-icons/fa'

import logo from 'assets/img/logo.svg'

import * as S from './styles'

export const Navbar = () => {
  const { isVisible, setIsVisible } = useNavbar()

  return (
    <>
      <S.MobileNav>
        <button type="button" onClick={() => setIsVisible(!isVisible)}>
          <FaBars size={24} />
        </button>
      </S.MobileNav>

      <S.Nav transaction={isVisible}>
        <S.NavBtn type="button" onClick={() => setIsVisible(!isVisible)}>
          {!isVisible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </S.NavBtn>

        <div>
          <S.Logo src={logo} alt="e-manager" />

          <S.NavLinks>
            <S.NavLink to="/dashboard">
              <FaThLarge size={20} />
              <span>Dashboard</span>
            </S.NavLink>
            <S.NavLink to="/products">
              <FaTag size={20} />
              <span>Produtos </span>
            </S.NavLink>
            <S.NavLink to="/categories">
              <FaHashtag size={20} />
              <span>Categorias</span>
            </S.NavLink>
          </S.NavLinks>
        </div>
      </S.Nav>
    </>
  )
}
