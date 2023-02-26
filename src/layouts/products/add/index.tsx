import { Button, Input, Select } from 'components'

import { selectOptionMock } from 'components/Form/Select/mock'

import { BaseLayout } from 'layouts/base'

import * as S from './styles'

export const AddProductLayout = () => {
  return (
    <BaseLayout title="Adicionar produto">
      <S.Wrapper>
        <S.InputGroup>
          <Input label="Nome" placeholder="Nome do produto" />

          <Select label="Nome" options={selectOptionMock} />

          <Input type="number" label="Preço" placeholder="Preço do produto" />

          <S.RadioWrapper>
            <span>Em estoque</span>

            <S.RadioContainer>
              <input type="radio" id="in-stock" name="stock" value="true" />
              <label htmlFor="in-stock">Sim</label>
            </S.RadioContainer>

            <S.RadioContainer>
              <input type="radio" id="no-stock" name="stock" value="false" />
              <label htmlFor="no-stock">Não</label>
            </S.RadioContainer>
          </S.RadioWrapper>

          <Input
            type="number"
            label="Quantidade"
            placeholder="Quantidade em estoque"
          />
        </S.InputGroup>

        <Button>Adicionar</Button>
      </S.Wrapper>
    </BaseLayout>
  )
}
