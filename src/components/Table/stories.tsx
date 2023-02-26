import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Table } from '.'

import { tableMock } from './mock'

export default {
  title: 'Components/Table',
  component: Table,
  args: tableMock,
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Default = Template.bind({})
