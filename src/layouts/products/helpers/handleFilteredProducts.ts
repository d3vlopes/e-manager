import { DataTable } from 'components'

export function handleFilteredProducts(
  products: DataTable[],
  searchValue: string,
) {
  const data = products.filter((product) => {
    return (
      product.productName.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.category.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.price.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  })

  return data
}
