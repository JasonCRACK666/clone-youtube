import { FC } from 'react'

import { useLocation } from 'react-router-dom'

import { OverridableComponent } from '@mui/material/OverridableComponent'

import {
  ListItem,
  ListItemButton,
  SvgIconTypeMap,
  Typography
} from '@mui/material'

interface Props {
  title: string
  path: string
  ActiveIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string
  }
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string
  }
}

export const ListItemNavLinkIcon: FC<Props> = ({
  Icon,
  title,
  path,
  ActiveIcon
}) => {
  const location = useLocation()

  const isSelected = location.pathname === path

  return (
    <ListItem disablePadding>
      <ListItemButton
        title={title}
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          py: 1
        }}
      >
        {
          isSelected
            ? <ActiveIcon sx={{ fontSize: '2rem' }} />
            : <Icon sx={{ fontSize: '2rem' }} />
        }

        <Typography variant='caption'>
          {title}
        </Typography>
      </ListItemButton>
    </ListItem>
  )
}
