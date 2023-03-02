import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useTheme } from 'styled-components'

import { Loading } from '.'

export default {
  title: 'Components/Loading',
  component: Loading,
  args: {
    size: 5,
  },
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
    size: {
      type: 'number',
    },
  },
} as ComponentMeta<typeof Loading>

const Template: ComponentStory<typeof Loading> = (args) => {
  const theme = useTheme()

  return <Loading color={theme.colors.primary[500]} size={args.size} />
}

export const Default = Template.bind({})
