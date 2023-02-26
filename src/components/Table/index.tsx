import { TableDataTemplate } from './template/TableDataTemplate'

import * as S from './styles'

export interface DataTable {
  id: string
  productName: string
  category: string
  price: number
  inStock: boolean
  quantity: number
  createdAt: Date
  updatedAt: Date
}

export type TableProps = {
  data: DataTable[]
}

export const Table = ({ data }: TableProps) => {
  return (
    <S.Wrapper>
      <S.Table>
        <S.Thead>
          <S.Tr>
            <S.Th>ID</S.Th>
            <S.Th>Nome</S.Th>
            <S.Th>Categoia</S.Th>
            <S.Th>Preço</S.Th>
            <S.Th>Em estoque</S.Th>
            <S.Th>Quantidade</S.Th>
            <S.Th>Adicionado em</S.Th>
            <S.Th>Atualizado em</S.Th>
          </S.Tr>
        </S.Thead>

        <S.Tbody>{data.map(TableDataTemplate)}</S.Tbody>
      </S.Table>
    </S.Wrapper>
  )
}
