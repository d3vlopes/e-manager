import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Sample } from '.'

export default {
  title: 'Components/Sample',
  component: Sample,
  args: {
    title: 'Sample',
  },
} as ComponentMeta<typeof Sample>

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />

export const Default = Template.bind({})
