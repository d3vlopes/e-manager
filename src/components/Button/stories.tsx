import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    color: 'primary',
    size: 'medium',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
}

export const Danger = Template.bind({})
Danger.args = {
  color: 'danger',
}

export const Success = Template.bind({})
Success.args = {
  color: 'success',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
