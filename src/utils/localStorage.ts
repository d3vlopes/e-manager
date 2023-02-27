import { ProductAPI } from 'api'

export function getLocalStorageData() {
  const localStorageData = localStorage.getItem('e-manager')

  return localStorageData ? JSON.parse(localStorageData) : null
}

export const setLocalStorageData = (values: ProductAPI[]) => {
  localStorage.setItem('e-manager', JSON.stringify(values))
}
