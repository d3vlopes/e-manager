import { Dispatch, SetStateAction, useCallback } from 'react'

export function useForm(onFieldChange: (value: string) => void) {
  const onChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
      setValue: Dispatch<SetStateAction<string>>,
    ) => {
      const newValue = e.currentTarget.value
      setValue(newValue)

      !!onFieldChange && onFieldChange(newValue)
    },
    [onFieldChange],
  )

  return {
    onChange,
  }
}
