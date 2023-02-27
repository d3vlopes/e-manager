import { BASE_URL } from 'constant'

export async function getAllProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`)
    const data = await response.json()

    return data
  } catch {
    throw new Error()
  }
}
