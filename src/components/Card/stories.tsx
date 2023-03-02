import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Card } from '.'
import { cardDownStockMock, cardMoreExpressivekMock } from './mock'

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const DownStock = Template.bind({})
DownStock.args = {
  title: 'Produtos com estoque baixo',
  variant: 'down-stock',
  products: cardDownStockMock,
}

export const MoreExpressive = Template.bind({})
MoreExpressive.args = {
  title: 'Produtos mais caros',
  variant: 'more-expensive',
  products: cardMoreExpressivekMock,
}

export const AddProducts = Template.bind({})
AddProducts.args = {
  title: 'Produtos',
  variant: 'add-products',
  productsCount: 12,
}
