import { Button } from 'components/Button'
import { removeProduct } from 'http/requests/products'

import { Link, useNavigate } from 'react-router-dom'

import { formatPrice } from 'utils'

import { DataTable } from '..'

import * as S from '../styles'

export const TableDataTemplate = (data: DataTable) => {
  const navigate = useNavigate()

  const priceFormatted = formatPrice(data.price)

  async function handleRemoveProduct(id: string) {
    alert('Produto removido')

    navigate(0)

    await removeProduct(id)
  }

  return (
    <S.Tr key={data.id}>
      <S.Td>{data.id.slice(0, 5)}</S.Td>
      <S.Td>{data.productName}</S.Td>
      <S.Td>{data.category}</S.Td>
      <S.Td>{priceFormatted}</S.Td>
      <S.Td>{data.quantity}</S.Td>

      <S.Td>
        <S.ButtonGroup>
          <Button size="small">
            <Link key={data.id} to={`/product/${data.id}`}>
              Editar
            </Link>
          </Button>

          <Button
            type="submit"
            size="small"
            color="danger"
            onClick={() => handleRemoveProduct(data.id)}
          >
            Remover
          </Button>
        </S.ButtonGroup>
      </S.Td>
    </S.Tr>
  )
}
