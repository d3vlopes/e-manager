import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { createProduct } from 'http/requests/products'

import { Button, Input } from 'components'

import { BaseLayout } from 'layouts/base'

import * as S from './styles'

export const AddProductLayout = () => {
  const [values, setValues] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleInput = (field: string, value: string | number) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (!values.name || !values.category || !values.price || !values.quantity)
      return

    try {
      setIsLoading(true)

      alert('Produto adicionado com sucesso')

      await createProduct({
        ...values,
        price: Number(values.price),
        quantity: Number(values.quantity),
      })

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
              onChange={(event) =>
                handleInput('name', event.currentTarget.value)
              }
            />

            <Input
              label="Categoria"
              placeholder="Categoria do produto"
              value={values.category}
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
