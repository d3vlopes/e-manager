import { Link } from 'react-router-dom'

import { Button, Search, Table } from 'components'

import { tableMock } from 'components/Table/mock'

import { BaseLayout } from 'layouts/base'

import * as S from './styles'

export const ProductsLayout = () => {
  return (
    <BaseLayout title="Produtos">
      <S.Header>
        <Search placeholder="Buscar produto" />
      </S.Header>

      <S.Divider />

      <S.Content>
        <Link to="/products/add">
          <Button>Adicionar produto</Button>
        </Link>

        <Table data={tableMock.data} />
      </S.Content>
    </BaseLayout>
  )
}
