import { FormEvent, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { ProductAPI } from 'api'

import { getLocalStorageData, setLocalStorageData } from 'utils'

import { Button, Input } from 'components'

import { BaseLayout } from 'layouts/base'

import * as S from './styles'

type Product = Partial<ProductAPI>

export const AddProductLayout = () => {
  const [values, setValues] = useState({
    id: uuid(),
    name: '',
    category: '',
    price: '',
    quantity: '',
  } as Product)

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleInput = (field: string, value: string | number) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    //validação
    if (!values.name || !values.category || !values.price || !values.quantity)
      return

    try {
      setIsLoading(true)

      const products = getLocalStorageData()

      setLocalStorageData([...products, values])

      alert('Produto adicionado com sucesso')

      navigate('/products')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <BaseLayout title="Adicionar produto">
      <S.Wrapper>
        <form onSubmit={handleSubmit}>
          <S.InputGroup>
            <Input
              label="Nome"
              placeholder="Nome do produto"
              value={values.name}
              isError={Boolean(error.length > 0)}
              error={error}
              onChange={(event) =>
                handleInput('name', event.currentTarget.value)
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

          <Button disabled={isLoading}>Adicionar</Button>
        </form>
      </S.Wrapper>
    </BaseLayout>
  )
}
