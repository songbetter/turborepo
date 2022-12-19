import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Calculator } from 'ui'

export default {
  title: 'UI/Calculator',
  component: Calculator,
} as ComponentMeta<typeof Calculator>
const Template: ComponentStory<typeof Calculator> = () => <Calculator />

export const Default = Template.bind({})
