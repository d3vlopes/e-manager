import { ReactNode } from 'react'

import { useNavbar } from 'hooks'

import * as S from './styles'

interface BaseLayoutProps {
  children: ReactNode
  title: string
}

export const BaseLayout = ({ children, title }: BaseLayoutProps) => {
  const { isVisible } = useNavbar()

  return (
    <S.Wrapper className={!isVisible ? 'page' : 'page page-with-navbar'}>
      <h1>{title}</h1>

      {children}
    </S.Wrapper>
  )
}
