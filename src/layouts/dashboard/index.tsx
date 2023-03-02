import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

import { Product } from 'domain/Product'

import { productsMapper } from 'mappers'

import { getAllProducts } from 'http/requests/products'

import { Card, Loading } from 'components'

import { BaseLayout } from 'layouts/base'

import {
  getProductsCount,
  sortProductsByDownStock,
  sortProductsByMoreExpessive,
} from './helpers'

import * as S from './styles'

export const DashboardLayout = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const theme = useTheme()

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true)

      try {
        const data = await getAllProducts()

        setProducts(productsMapper(data))
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  const productsInDownStock = sortProductsByDownStock(products)

  const productsMoreExpessive = sortProductsByMoreExpessive(products)

  const productsCount = getProductsCount(products)

  const renderLoading = () => {
    return <Loading color={theme.colors.primary[500]} />
  }

  const renderContent = () => {
    return (
      <S.CardsWrapper>
        <Card
          title="Produtos com estoque baixo"
          variant="down-stock"
          products={productsInDownStock}
        />
        <Card
          title="Produtos mais caros"
          variant="more-expensive"
          products={productsMoreExpessive}
        />
        <Card
          title="Produtos"
          variant="add-products"
          productsCount={productsCount}
        />
      </S.CardsWrapper>
    )
  }

  return (
    <BaseLayout title="Dashboard">
      <S.Wrapper>{isLoading ? renderLoading() : renderContent()}</S.Wrapper>
    </BaseLayout>
  )
}
