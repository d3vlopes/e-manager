import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input } from '.'

export default {
  title: 'Form/Input',
  component: Input,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    label: 'Label',
    initialValue: '',
    placeholder: 'Enter value',
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
  <div style={{ maxWidth: '62.1rem' }}>
    <Input {...args} />
  </div>
)

export const Default = Template.bind({})
