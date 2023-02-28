import { FormEvent, useEffect, useState } from 'react'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { ProductAPI } from 'api'
import { Product } from 'mappers'

import { getLocalStorageData, setLocalStorageData } from 'utils'

import { Button, Input } from 'components'

import { BaseLayout } from 'layouts/base'

import * as S from './styles'

export const EditProductLayout = () => {
  const params = useParams()
  const id = params.id

  const products = getLocalStorageData()
  const product: Product = products.find(
    (product: Product) => product.id === id,
  )

  const [values, setValues] = useState({
    id: product.id,
    productName: product.productName,
    category: product.category,
    price: product.price,
    quantity: product.quantity,
  })

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleInput = (field: string, value: string | number) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    //validação
    if (
      !values.productName ||
      !values.category ||
      !values.price ||
      !values.quantity
    )
      return

    try {
      setIsLoading(true)

      const products = getLocalStorageData()
      const filteredProducts = products.filter(
        (p: Product) => p.id !== product.id,
      )

      setLocalStorageData([...filteredProducts, values])

      alert('Produto atualizado com sucesso')

      navigate('/products')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const title = `Editar produto ${product.productName}`

  return (
    <BaseLayout title={title}>
      <S.Wrapper>
        <form onSubmit={handleSubmit}>
          <S.InputGroup>
            <Input
              label="Nome"
              placeholder="Nome do produto"
              value={values.productName}
              isError={Boolean(error.length > 0)}
              error={error}
              onChange={(event) =>
                handleInput('productName', event.currentTarget.value)
              }
            />

            <Input
              label="Categoria"
              placeholder="Categoria do produto"
              value={values.category}
              isError={Boolean(error)}
              error={error}
              onChange={(event) =>
                handleInput('category', event.currentTarget.value)
              }
            />

            <Input
              type="number"
              label="Preço"
              placeholder="Preço do produto"
              value={values.price}
              onChange={(event) =>
                handleInput('price', event.currentTarget.value)
              }
            />

            <Input
              type="number"
              label="Quantidade"
              placeholder="Quantidade em estoque"
              value={values.quantity}
              onChange={(event) =>
                handleInput('quantity', event.currentTarget.value)
              }
            />
          </S.InputGroup>

          <Button disabled={isLoading}>Atualizar</Button>
        </form>
      </S.Wrapper>
    </BaseLayout>
  )
}
