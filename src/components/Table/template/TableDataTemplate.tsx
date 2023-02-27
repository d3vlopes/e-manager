import { Link } from 'react-router-dom'

import { formatPrice } from 'utils'

import { DataTable } from '..'

import * as S from '../styles'

export const TableDataTemplate = (data: DataTable) => {
  const priceFormatted = formatPrice(data.price)

  return (
    <S.Tr key={data.id}>
      <S.Td>{data.id.slice(0, 5)}</S.Td>
      <S.Td>{data.productName}</S.Td>
      <S.Td>{data.category}</S.Td>
      <S.Td>{priceFormatted}</S.Td>
      <S.Td>{data.quantity}</S.Td>

      <S.Td>
        <div>
          <Link key={data.id} to={`/product/${data.id}`}>
            Editar
          </Link>
        </div>
      </S.Td>
    </S.Tr>
  )
}
