import { FC } from 'react'

import { MainLink } from '../interfaces/NavLink'

import { List } from '@mui/material'

import {
  HomeOutlined as HomeOutlinedIcon,
  Home as HomeIcon,
  VideoLibrary as VideoLibraryIcon,
  VideoLibraryOutlined as VideoLibraryOutlinedIcon,
  ThumbUp as LikeIcon,
  ThumbUpOutlined as LikeOutlineIcon
} from '@mui/icons-material'

import { ListItemNavLink } from './ListItemNavLink'

export const NavLinkList: FC = () => {
  const mainLinks: MainLink[] = [
    {
      path: '/',
      name: 'Home',
      IconFill: HomeIcon,
      IconOut: HomeOutlinedIcon
    },
    {
      path: '/Juan/videos',
      name: 'Your videos',
      IconFill: VideoLibraryIcon,
      IconOut: VideoLibraryOutlinedIcon
    },
    {
      path: '/videos/liked',
      name: 'Liked videos',
      IconFill: LikeIcon,
      IconOut: LikeOutlineIcon
    }
  ]

  return (
    <List sx={{ p: 1.5 }} >
      {mainLinks.map(link => <ListItemNavLink key={link.name} {...link} />)}
    </List>
  )
}
