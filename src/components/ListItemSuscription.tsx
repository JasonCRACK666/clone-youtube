import { FC } from 'react'

import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemText
} from '@mui/material'

interface Props {
  avatar: string
  username: string
}

export const ListItemSuscription: FC<Props> = ({
  avatar,
  username
}) => {
  return (
    <ListItemButton title={username}>
      <ListItemAvatar>
        <Avatar src={avatar} sx={{ width: 25, height: 25 }} />
      </ListItemAvatar>
      <ListItemText primary={username} />
    </ListItemButton>
  )
}
