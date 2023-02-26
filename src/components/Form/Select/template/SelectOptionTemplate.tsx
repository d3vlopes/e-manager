import { SelectOption } from '..'

export const SelectOptionTemplate = (option: SelectOption) => {
  return <option value={option.value}>{option.text}</option>
}
