import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Select } from '.'

import { selectOptionMock } from './mock'

export default {
  title: 'Form/Select',
  component: Select,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    label: 'Categoria',
    initialValue: '',
    options: selectOptionMock,
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
