import { FC } from 'react'

import {
  List,
  useTheme,
  useMediaQuery
} from '@mui/material'

import {
  HomeOutlined as HomeOutlinedIcon,
  Home as HomeIcon,
  VideoLibrary as VideoLibraryIcon,
  VideoLibraryOutlined as VideoLibraryOutlinedIcon,
  ThumbUp as LikeIcon,
  ThumbUpOutlined as LikeOutlineIcon
} from '@mui/icons-material'

import { ListItemNavLinkIcon } from './ListItemNavLinkIcon'

export const VerticalNavigationIconBar: FC = () => {
  const theme = useTheme()
  const hideBar = useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px)`)

  return (
    <List
      sx={{
        p: 1,
        position: 'sticky',
        top: 76,
        height: '92vh',
        overflowY: 'scroll',
        display: hideBar ? 'none' : 'block'
      }}
    >
      <ListItemNavLinkIcon
        Icon={HomeOutlinedIcon}
        ActiveIcon={HomeIcon}
        title='Home'
        path='/'
      />
      <ListItemNavLinkIcon
        Icon={VideoLibraryOutlinedIcon}
        ActiveIcon={VideoLibraryIcon}
        title='Your videos'
        path='/Juan/videos'
      />
      <ListItemNavLinkIcon
        Icon={LikeOutlineIcon}
        ActiveIcon={LikeIcon}
        title='Liked videos'
        path='/videos/liked'
      />
    </List>
  )
}
