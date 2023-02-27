import { Product } from 'mappers'

export function getLocalStorageData() {
  const localStorageData = localStorage.getItem('e-manager')

  return localStorageData ? JSON.parse(localStorageData) : null
}

export const setLocalStorageData = (values: Product[]) => {
  localStorage.setItem('e-manager', JSON.stringify(values))
}
