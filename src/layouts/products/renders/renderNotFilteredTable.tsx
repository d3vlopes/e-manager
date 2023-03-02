import { Product } from 'domain/Product'

import { Table } from 'components'

export const renderNotFilteredTable = (products: Product[]) => {
  return <Table data={products} />
}
