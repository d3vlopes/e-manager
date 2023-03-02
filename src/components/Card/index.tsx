import * as S from './styles'

export interface CardProduct {
  name: string
  value: string
}

export interface CardProps {
  title: string
  variant: 'down-stock' | 'more-expensive' | 'add-products'
  products?: CardProduct[]
  productsCount?: number
}

export const Card = ({
  title,
  variant,
  productsCount,
  products = [],
}: CardProps) => {
  return (
    <S.Wrapper>
      <header>
        <h2>{title}</h2>
      </header>

      <S.Divider />

      <S.Content>
        {productsCount ? (
          <S.AddProduct>
            <span>{productsCount}</span>
            <p>Produtos adicionados</p>
          </S.AddProduct>
        ) : (
          products.map((product) => (
            <S.Product key={product.name} variant={variant}>
              <span>{product.name}</span>
              <p>{product.value}</p>
            </S.Product>
          ))
        )}
      </S.Content>
    </S.Wrapper>
  )
}
