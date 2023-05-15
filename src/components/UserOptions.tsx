import { FC, useState, MouseEvent } from 'react'

import { auth } from '../firebase'
import { signOut, User } from 'firebase/auth'

import { useAuthStore } from '../store/useAuthStore'

import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Typography,
  ListItemIcon,
  Divider,
  Stack
} from '@mui/material'

import {
  Logout as LogoutIcon,
  VideoCallOutlined as CreateVideoIcon
} from '@mui/icons-material'

interface Props {
  user: User
}

export const UserOptions: FC<Props> = ({ user }) => {
  const [anchoEl, setAnchoEl] = useState<null | HTMLElement>(null)

  const { logOut } = useAuthStore()

  const isOpen = Boolean(anchoEl)

  const handleOpenMenu = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchoEl(e.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchoEl(null)
  }

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        logOut()
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <Stack spacing={2} direction='row'>
      <IconButton size={'small'}>
        <CreateVideoIcon sx={{ fontSize: '1.9rem' }} />
      </IconButton>

      <IconButton
        sx={{ p: 0 }}
        aria-haspopup='true'
        aria-controls={isOpen ? 'user-options-menu' : undefined}
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleOpenMenu}
      >
        <Avatar
          alt={user.displayName!}
          sx={{ width: 35, height: 35 }}
          src={user.photoURL ?? undefined}
        />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={anchoEl}
        onClose={handleCloseMenu}
        id='user-options-menu'
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{ ml: -8 }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pt: 1,
            pb: 1.5,
            px: 3,
            gap: 1,
          }}
        >
          <Avatar
            src={user.photoURL ?? undefined}
            sx={{ width: 40, height: 40 }}
          />
          <Typography variant='subtitle1'>
            {user.displayName}
          </Typography>
        </Box>
        <Divider />
        <MenuItem onClick={handleLogOut} sx={{ py: 1.2 }}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          Sign out
        </MenuItem>
      </Menu>
    </Stack>
  )
}
