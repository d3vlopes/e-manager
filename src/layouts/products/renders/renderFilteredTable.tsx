import { DataTable, Table } from 'components'

export const renderFilteredTable = (filteredProducts: DataTable[]) => {
  return <Table data={filteredProducts} />
}
