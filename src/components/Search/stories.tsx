import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Search } from '.'

export default {
  title: 'Components/Search',
  component: Search,
  args: {
    placeholder: 'Buscar produto',
  },
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />

export const Default = Template.bind({})
