import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Sample } from '.'

export default {
  title: 'Components/Sample',
  component: Sample,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/example-url',
    },
  },
  args: {
    title: 'Hello Union',
  },
} as ComponentMeta<typeof Sample>

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />

export const Default = Template.bind({})
