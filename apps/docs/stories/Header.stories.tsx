import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from 'ui'

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Login = Template.bind({})
Login.args = {
  logged: false,
}
export const Logout = Template.bind({})

Logout.args = {
  logged: true,
}
