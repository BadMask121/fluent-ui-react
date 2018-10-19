import * as React from 'react'
import { Menu, Provider } from '@stardust-ui/react'
import { navbarMenuStyles, navbarMenuItemStyles } from './styles'

export default () => (
  <Provider
    theme={{
      componentStyles: {
        MenuItem: {
          root: navbarMenuItemStyles,
        },
        Menu: {
          root: navbarMenuStyles,
        },
      },
    }}
  >
    <>
      <Menu
        items={[
          'Past Events',
          'Blog',
          'Partners',
          'Archive',
          'Videos',
          'Handbook',
          { content: 'About Us', styles: { color: '#56b36d' } },
        ]}
      />
    </>
  </Provider>
)
