import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { Navbar } from '.'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [withRouter],
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = () => <Navbar />

export const Default = Template.bind({})
