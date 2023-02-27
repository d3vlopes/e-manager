import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useTheme } from 'styled-components'

import { Loading } from '.'

export default {
  title: 'Components/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>

const Template: ComponentStory<typeof Loading> = () => {
  const theme = useTheme()

  return <Loading color={theme.colors.primary[500]} />
}

export const Default = Template.bind({})
