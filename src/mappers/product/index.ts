import { Product } from 'domain/Product'

import { ProductAPI } from 'api'

export const productMapper = (product: ProductAPI): Product => {
  return {
    id: product.id,
    productName: product.name,
    category: product.category,
    price: Number(product.price),
    quantity: product.quantity,
  }
}
