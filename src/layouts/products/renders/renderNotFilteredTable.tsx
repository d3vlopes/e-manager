import { DataTable, Table } from 'components'

export const renderNotFilteredTable = (products: DataTable[]) => {
  return <Table data={products} />
}
