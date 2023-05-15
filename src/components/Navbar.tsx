import { FC, useContext } from 'react'

import { Link } from 'react-router-dom'

import { shallow } from 'zustand/shallow'
import { useAuthStore } from '../store/useAuthStore'

import { VerticalNavigationContext } from '../context/VerticalNavigationContextProvider'

import { styled } from '@mui/system'

import {
  Box,
  IconButton,
  Typography,
  Skeleton,
  useMediaQuery,
  useTheme
} from '@mui/material'

import {
  Menu as MenuIcon,
  YouTube as YoutubeIcon
} from '@mui/icons-material'

import { InputSearch } from './InputSearch'
import { UserOptions } from './UserOptions'
import { AccessButton } from './AccessButton'

const NavbarContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'primary.dark',
  padding: '8px 22px',
  position: 'sticky',
  top: 0,
  zIndex: 10
}))

export const Navbar: FC = () => {
  const { user, isAuth, loadingAuth } = useAuthStore(state => ({
    isAuth: state.isAuth,
    user: state.user!,
    loadingAuth: state.loadingAuth
  }), shallow)

  const { setIsFullOpen, setIsOpenDrawer } = useContext(VerticalNavigationContext)

  const theme = useTheme()
  const showDrawerVerticalNavigation = useMediaQuery(`(max-width: ${theme.breakpoints.values.lg}px)`)

  const handleToggleVerticalNavigation = () => {
    if (showDrawerVerticalNavigation) {
      setIsOpenDrawer(true)
    } else {
      setIsFullOpen(prev => !prev)
    }
  }

  return (
    <NavbarContainer>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton onClick={() => handleToggleVerticalNavigation()}>
          <MenuIcon />
        </IconButton>
        <Typography
          component={Link}
          to={'/'}
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '1.3rem',
            color: 'white',
            textDecoration: 'none'
          }}
        >
          <YoutubeIcon fontSize='large' color={'secondary'} />
          <span>Youtube</span>
        </Typography>
      </Box>

      <InputSearch />

      {
        loadingAuth ? (
          <Skeleton variant='circular' width={35} height={35} />
        ) : isAuth ? (
          <UserOptions user={user} />
        ) : (
          <AccessButton />
        )
      }
    </NavbarContainer>
  )
}
