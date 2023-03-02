import { Product } from 'domain/Product'

import { formatPrice } from 'utils'

export const sortProductsByDownStock = (products: Product[]) => {
  const data = products
    .map((product) => ({
      name: product.productName,
      value: String(product.quantity),
    }))
    .sort((a, b) => Number(a.value) - Number(b.value))
    .slice(0, 5)

  return data
}

export const sortProductsByMoreExpessive = (products: Product[]) => {
  const data = products
    .map((product) => ({
      name: product.productName,
      value: product.price,
    }))
    .sort((a, b) => Number(b.value) - Number(a.value))
    .map((product) => ({
      name: product.name,
      value: formatPrice(product.value),
    }))
    .slice(0, 5)

  return data
}

export const getProductsCount = (products: Product[]) => products.length
