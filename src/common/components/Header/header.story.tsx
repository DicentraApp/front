import type { Meta, StoryObj } from '@storybook/react'
import { Header, navData } from '.'

import '@/index.css'

const meta = {
  title: 'Common/Header',
  component: Header,
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const View: Story = {
  args: {
    phoneNumber: '+380 (98) 997-19-91',
    imageLogoPath: 'images/logo/logo_dicentra.png',
    subtitleLogo: 'Choose with heart',
    searchIconPath: 'images/user/icon_user.svg',
    iconUserPath: 'images/user/icon_user.svg',
    cartIconPath: 'images/user/icon_cart.svg',
    cartNumber: 89,
    data: navData,
  },
}
