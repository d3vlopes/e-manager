import toast from 'react-hot-toast'

import { Button } from 'components/Button'
import { removeProduct } from 'http/requests/products'

import { Link, useNavigate } from 'react-router-dom'

import { formatPrice } from 'utils'

import { DataTable } from '..'

import * as S from '../styles'

export const TableDataTemplate = (data: DataTable) => {
  const navigate = useNavigate()

  const priceFormatted = formatPrice(data.price)

  async function apiRemoveProduct(id: string) {
    await removeProduct(id)

    navigate(0)
  }

  async function handleRemoveProduct(id: string) {
    toast((t) => (
      <S.RemoveWrapper>
        <span>Tem certeza que desja remover esse produto?</span>
        <S.RemoveButtonsGroup>
          <Button
            type="button"
            color="secondary"
            size="small"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            color="danger"
            size="small"
            onClick={() => apiRemoveProduct(id)}
          >
            Remover
          </Button>
        </S.RemoveButtonsGroup>
      </S.RemoveWrapper>
    ))
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
