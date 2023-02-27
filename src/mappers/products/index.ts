import { v4 as uuid } from 'uuid'

import { ProductAPI } from 'api'

import { DataTable } from 'components'

export type Product = DataTable

export function productsMapper(products: ProductAPI[]): Product[] {
  return products.map((product) => ({
    id: uuid(),
    productName: product.name,
    category: product.category,
    price: Number(product.price),
    quantity: Number(product.quantity),
  }))
}
