import { api } from 'services/api'

interface CreateProductDTO {
  name: string
  price: number
  quantity: number
  category: string
}

export async function createProduct(values: CreateProductDTO) {
  try {
    const { data } = await api.post('products', {
      ...values,
    })

    return data
  } catch {
    throw new Error()
  }
}

export async function getAllProducts() {
  try {
    const { data } = await api.get('products')

    return data
  } catch {
    throw new Error()
  }
}

export async function findProduct(id: string) {
  try {
    const { data } = await api.get(`products/${id}`)

    return data
  } catch {
    throw new Error()
  }
}

interface UpdateProductDTO {
  name: string
  price: number
  quantity: number
  category: string
}

export async function updateProduct(id: string, request: UpdateProductDTO) {
  try {
    const { data } = await api.put(`products/${id}`, request)

    return data
  } catch {
    throw new Error()
  }
}

export async function removeProduct(id: string) {
  try {
    const { data } = await api.delete(`products/${id}`)

    return data
  } catch {
    throw new Error()
  }
}
