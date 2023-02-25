import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export interface ButtonProps extends BaseButtonProps {
  children: ReactNode
  color?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'default' | 'large'
}

export const Button = ({
  children,
  color = 'primary',
  size = 'default',
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper color={color} size={size} {...props}>
      <span>{children}</span>
    </S.Wrapper>
  )
}
