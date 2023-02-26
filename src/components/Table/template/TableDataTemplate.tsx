import { formatDate, formatPrice } from 'utils'

import { inStockMap } from '../helpers/inStockMap'

import { DataTable } from '..'

import * as S from '../styles'

export const TableDataTemplate = (data: DataTable) => {
  const priceFormatted = formatPrice(data.price)

  const createdAtFormatted = formatDate(data.createdAt.toString())
  const updatedAtFormatted = formatDate(data.createdAt.toString())

  const stockMap = inStockMap[String(data.inStock)]

  return (
    <S.Tr key={data.id}>
      <S.Td>{data.id}</S.Td>
      <S.Td>{data.productName}</S.Td>
      <S.Td>{data.category}</S.Td>
      <S.Td>{priceFormatted}</S.Td>
      <S.Td>{stockMap}</S.Td>
      <S.Td>{data.quantity}</S.Td>
      <S.Td>{createdAtFormatted}</S.Td>
      <S.Td>{updatedAtFormatted}</S.Td>
    </S.Tr>
  )
}
