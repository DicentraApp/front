import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { App } from '@/App'

const meta = {
  title: 'Example/Button',
  component: App,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'App',
  },
}
