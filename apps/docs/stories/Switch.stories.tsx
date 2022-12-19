import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Switch } from 'ui'

export default {
  title: 'UI/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const On = Template.bind({})
On.args = {
  on: true,
}
export const Off = Template.bind({})

Off.args = {
  on: false,
}
