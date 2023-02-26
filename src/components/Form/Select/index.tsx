import { SelectHTMLAttributes, useState } from 'react'

import { useForm } from 'hooks'

import { SelectOptionTemplate } from './template/SelectOptionTemplate'

import * as S from './styles'

type SelectBaseProps = SelectHTMLAttributes<HTMLSelectElement>

export interface SelectOption {
  value: string
  text: string
}

export interface SelectProps extends SelectBaseProps {
  label: string
  initialValue?: string
  options: SelectOption[]
  onFieldChange?: (value: string) => void
}

export const Select = ({
  label,
  name,
  options,
  initialValue = '',
  onFieldChange,
  ...props
}: SelectProps) => {
  const [selectValue, setSelectValue] = useState(initialValue)

  const { onChange } = useForm(onFieldChange!)

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>

      <S.Select
        value={selectValue}
        onChange={(event) => onChange(event, setSelectValue)}
        name={name}
        id={name}
        {...props}
      >
        {options.map(SelectOptionTemplate)}
      </S.Select>
    </S.Wrapper>
  )
}
