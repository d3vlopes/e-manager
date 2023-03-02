import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { Link } from 'react-router-dom'

import { Product } from 'domain/Product'

import { getAllProducts } from 'http/requests/products'

import { productsMapper } from 'mappers'

import { Button, Loading } from 'components'

import {
  renderFilteredTable,
  renderNotFilteredTable,
  renderNotFoundProduct,
} from './renders'

import { handleFilteredProducts } from './helpers'

import { BaseLayout } from 'layouts/base'

import * as S from './styles'

export const ProductsLayout = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [searchValue, setSearchValue] = useState('')
  const [searchShow, setSearchShow] = useState(false)

  const theme = useTheme()

  const handleLoadProducts = useCallback(async () => {
    try {
      setIsLoading(true)

      const data = await getAllProducts()

      setProducts(productsMapper(data))
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    handleLoadProducts()
  }, [handleLoadProducts])

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target

    setSearchValue(value)

    if (value === '') {
      setSearchShow(false)
    } else {
      setSearchShow(true)
    }
  }

  const filteredProducts = handleFilteredProducts(products, searchValue)

  return (
    <BaseLayout title="Produtos">
      <S.Divider />

      <S.Content>
        <Link to="/products/add">
          <Button>Adicionar produto</Button>
        </Link>

        {isLoading && <Loading color={theme.colors.primary[500]} />}
        {searchShow && renderFilteredTable(filteredProducts)}
        {!searchShow && renderNotFilteredTable(products)}

        {filteredProducts.length === 0 && renderNotFoundProduct()}
      </S.Content>
    </BaseLayout>
  )
}
