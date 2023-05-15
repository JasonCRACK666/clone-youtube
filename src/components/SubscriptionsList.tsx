import { FC } from 'react'

import { List, ListSubheader } from '@mui/material'
import { ListItemSuscription } from './ListItemSuscription'

const suscriptionsData: Array<{ avatar: string; username: string }> = [
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  },
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  },
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  },
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  },
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  },
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  },
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  },
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  },
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  },
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  },
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  },
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  },
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  },
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  },
  {
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    username: 'Juan'
  }
]

export const SubscriptionsList: FC = () => {
  return (
    <List
      sx={{ p: 1.5 }}
      subheader={
        <ListSubheader>
          Subscriptions
        </ListSubheader>
      }
    >
      {suscriptionsData.map((suscription, index) => (
        <ListItemSuscription key={index} {...suscription} />
      ))}
    </List>
  )
}
