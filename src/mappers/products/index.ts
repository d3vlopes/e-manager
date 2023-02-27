import { ProductAPI } from 'api'

import { DataTable } from 'components'

export type Product = DataTable

export function productsMapper(products: ProductAPI[]): Product[] {
  return products.map((product) => ({
    id: product.id,
    productName: product.name,
    category: product.category,
    price: Number(product.price),
    quantity: Number(product.quantity),
  }))
}
