import { Product } from 'domain/Product'

import { Table } from 'components'

export const renderFilteredTable = (filteredProducts: Product[]) => {
  return <Table data={filteredProducts} />
}
