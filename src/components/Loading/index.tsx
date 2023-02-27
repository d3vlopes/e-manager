import { FaSpinner } from 'react-icons/fa'

import * as S from './styles'

export interface LoadingProps {
  color: string
  size?: string | number
}

export const Loading = ({ color, size = 3.4 }: LoadingProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      <FaSpinner />
    </S.Wrapper>
  )
}
