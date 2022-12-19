import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Counter } from 'ui'

export default {
  title: 'UI/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>
const Template: ComponentStory<typeof Counter> = () => <Counter />

export const Default = Template.bind({})
