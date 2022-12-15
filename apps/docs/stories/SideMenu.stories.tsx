import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SideMenu } from 'ui'

export default {
  title: 'Example/SideMenu',
  component: SideMenu,
} as ComponentMeta<typeof SideMenu>
const Template: ComponentStory<typeof SideMenu> = (args) => (
  <SideMenu {...args} />
)

export const On = Template.bind({})
On.args = {
  on: true,
}

export const Off = Template.bind({})
Off.args = {
  on: false,
}

export const Print = Template.bind({})
Print.args = {
  currentMenu: 'MYPAGE',
}
