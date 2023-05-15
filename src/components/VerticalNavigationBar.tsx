import { FC } from 'react'

import { Divider, List } from '@mui/material'

import { NavLinkList } from './NavLinkList'
import { SubscriptionsList } from './SubscriptionsList'

export const VerticalNavigationBar: FC = () => (
  <List
    sx={{
      width: '240px',
      position: 'sticky',
      top: 76,
      height: '92vh',
      overflowY: 'scroll'
    }}
  >
    <NavLinkList />
    <Divider color='gray' />
    <SubscriptionsList />
  </List>
)
