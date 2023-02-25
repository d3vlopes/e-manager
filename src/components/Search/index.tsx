import { InputHTMLAttributes } from 'react'
import { FaSearch } from 'react-icons/fa'

import * as S from './styles'

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement>

export type SearchProps = BaseInputProps

export const Search = ({ ...props }: SearchProps) => {
  return (
    <S.Wrapper>
      <FaSearch size={20} />
      <S.Input type="search" {...props} />
    </S.Wrapper>
  )
}
