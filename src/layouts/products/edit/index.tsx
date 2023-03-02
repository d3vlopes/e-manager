import { FormEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

import { Product } from 'domain/Product'

import { productMapper } from 'mappers'

import { findProduct, updateProduct } from 'http/requests/products'

import { Button, Input } from 'components'

import { BaseLayout } from 'layouts/base'

import * as S from './styles'

export const EditProductLayout = () => {
  const params = useParams()
  const id = params.id

  const [product, setProduct] = useState({} as Product)

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleInput = (field: string, value: string | number) => {
    setProduct((s) => ({ ...s, [field]: value }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (
      !product.productName ||
      !product.category ||
      product.price < 0 ||
      product.quantity < 0
    ) {
      return toast.error('Preencha todos os campos')
    }

    try {
      setIsLoading(true)

      await updateProduct(id!, {
        name: product.productName,
        price: product.price,
        quantity: Number(product.quantity),
        category: product.category,
      })

      toast.success('Produto atualizado com sucesso')

      navigate('/products')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    async function getProduct() {
      try {
        const data = await findProduct(id!)

        setProduct(productMapper(data))
      } catch (error) {
        console.log(error)
      }
    }

    getProduct()
  }, [id])

  const title = `Editar produto ${product.productName}`

  return (
    <BaseLayout title={title}>
      <S.Wrapper>
        <form onSubmit={handleSubmit}>
          <S.InputGroup>
            <Input
              label="Nome"
              placeholder="Nome do produto"
              value={product.productName}
              onChange={(event) =>
                handleInput('productName', event.currentTarget.value)
              }
            />

            <Input
              label="Categoria"
              placeholder="Categoria do produto"
              value={product.category}
              onChange={(event) =>
                handleInput('category', event.currentTarget.value)
              }
            />

            <Input
              type="number"
              label="Preço"
              placeholder="Preço do produto"
              value={product.price}
              onChange={(event) =>
                handleInput('price', event.currentTarget.value)
              }
            />

            <Input
              type="number"
              label="Quantidade"
              placeholder="Quantidade em estoque"
              value={product.quantity}
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
