import { ProductAPI } from 'api'
import { Product } from 'mappers/products'

export const productMapper = (product: ProductAPI): Product => {
  return {
    id: product.id,
    productName: product.name,
    category: product.category,
    price: Number(product.price),
    quantity: product.quantity,
  }
}
