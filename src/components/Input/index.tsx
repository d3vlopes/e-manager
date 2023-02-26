import { Dispatch, InputHTMLAttributes, SetStateAction, useState } from 'react'
import * as S from './styles'

type InputBaseProps = InputHTMLAttributes<HTMLInputElement>

export interface InputProps extends InputBaseProps {
  label: string
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

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setValue: Dispatch<SetStateAction<string>>,
  ) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onFieldChange && onFieldChange(newValue)
  }

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
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
