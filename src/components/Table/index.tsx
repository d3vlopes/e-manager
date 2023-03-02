/* eslint-disable react/display-name */
/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo } from 'react'

import { Product } from 'domain/Product'

import { TableDataTemplate } from './template/TableDataTemplate'

import * as S from './styles'

export type DataTable = Product

export type TableProps = {
  data: DataTable[]
}

export const Table = useMemo(
  () =>
    ({ data }: TableProps) => {
      return (
        <S.Wrapper>
          <S.Table>
            <S.Thead>
              <S.Tr>
                <S.Th>ID</S.Th>
                <S.Th>Nome</S.Th>
                <S.Th>Categoia</S.Th>
                <S.Th>Preço</S.Th>
                <S.Th>Quantidade</S.Th>
                <S.Th>Ações</S.Th>
              </S.Tr>
            </S.Thead>

            <S.Tbody>{data.map(TableDataTemplate)}</S.Tbody>
          </S.Table>
        </S.Wrapper>
      )
    },
  [],
)
