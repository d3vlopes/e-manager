import { InputHTMLAttributes, useState } from 'react'

import { useForm } from 'hooks'

import * as S from './styles'

type InputBaseProps = InputHTMLAttributes<HTMLInputElement>

export interface InputProps extends InputBaseProps {
  label?: string
  initialValue?: string
  onFieldChange?: (value: string) => void
}

export const Input = ({
  label,
  name,
  initialValue = '',
  onFieldChange,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState(initialValue)

  const { onChange } = useForm(onFieldChange!)

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Input
        type="text"
        onChange={(event) => onChange(event, setInputValue)}
        value={inputValue}
        name={name}
        id={name}
        {...props}
      />
    </S.Wrapper>
  )
}
