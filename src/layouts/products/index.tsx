import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { Link } from 'react-router-dom'

import { getAllProducts } from 'http/requests/products'

import { getLocalStorageData, setLocalStorageData } from 'utils'

import { productsMapper } from 'mappers'

import { Button, Search, Table, Loading } from 'components'

import { BaseLayout } from 'layouts/base'

import * as S from './styles'

export const ProductsLayout = () => {
  const [isLoading, setIsLoading] = useState(false)

  const theme = useTheme()

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true)

      try {
        const data = await getAllProducts()

        const products = getLocalStorageData()

        if (products) return

        setLocalStorageData(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  const renderLoading = () => {
    return <Loading color={theme.colors.primary[500]} />
  }

  const renderTable = () => {
    const products = getLocalStorageData()

    return <Table data={productsMapper(products)} />
  }

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

        {isLoading ? renderLoading() : renderTable()}
      </S.Content>
    </BaseLayout>
  )
}
