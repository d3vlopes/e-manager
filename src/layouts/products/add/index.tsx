import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import { createProduct } from 'http/requests/products'

import { Button, Input } from 'components'

import { BaseLayout } from 'layouts/base'

import { useAppDispatch as useDispatch } from 'redux/hooks'
import { addProduct } from 'redux/features/product/productSlice'

import * as S from './styles'

export const AddProductLayout = () => {
  const [values, setValues] = useState({
    name: '',
    category: '',
    price: '0',
    quantity: '0',
  })

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleInput = (field: string, value: string | number) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (
      !values.name ||
      !values.category ||
      Number(values.price) <= 0 ||
      !values.quantity
    ) {
      return toast.error('Preencha todos os campos')
    }

    try {
      setIsLoading(true)

      toast.success('Produto adicionado com sucesso')

      await createProduct({
        ...values,
        price: Number(values.price),
        quantity: Number(values.quantity),
      })

      dispatch(
        addProduct({
          ...values,
          productName: values.name,
          price: Number(values.price),
          quantity: Number(values.quantity),
        }),
      )

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
              label="Pre??o"
              placeholder="Pre??o do produto"
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
