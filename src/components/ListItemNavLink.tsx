import { FC } from 'react'

import { Link, useLocation } from 'react-router-dom'

import {
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'

import { MainLink } from '../interfaces/NavLink'

export const ListItemNavLink: FC<MainLink> = ({
  path,
  name,
  IconFill,
  IconOut
}) => {
  const location = useLocation()

  const isSelected = path === location.pathname

  return (
    <ListItemButton component={Link} to={path} selected={isSelected}>
      <ListItemIcon>
        {isSelected ? <IconFill /> : <IconOut />}
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  )
}
