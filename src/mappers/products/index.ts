import { Product } from 'domain/Product'

import { ProductAPI } from 'api'

export function productsMapper(products: ProductAPI[]): Product[] {
  return products.map((product) => ({
    id: product.id,
    productName: product.name,
    category: product.category,
    price: Number(product.price),
    quantity: product.quantity,
  }))
}
