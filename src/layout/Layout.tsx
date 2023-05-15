import { FC, ReactNode, useEffect, useContext } from 'react'

import { Outlet, Link } from 'react-router-dom'

import VerticalNavigationContextProvider, { VerticalNavigationContext } from '../context/VerticalNavigationContextProvider'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

import { useAuthStore } from '../store/useAuthStore'

import {
  Menu as MenuIcon,
  YouTube as YoutubeIcon
} from '@mui/icons-material'

import {
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton,
  Typography,
} from '@mui/material'

import { Navbar } from '../components/Navbar'
import { VerticalNavigationIconBar } from '../components/VerticalNavigationIconBar'
import { VerticalNavigationBar } from '../components/VerticalNavigationBar'

export const Layout: FC = () => {
  const { logOut, login } = useAuthStore()

  const theme = useTheme()
  const showDrawerVerticalNavigation = useMediaQuery(`(max-width: ${theme.breakpoints.values.lg}px)`)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        login(user)
      } else {
        logOut()
      }
    })
  }, [])

  return (
    <VerticalNavigationContextProvider>
      <Navbar />
      <LayoutContainer>
        {!showDrawerVerticalNavigation ? (
          <VerticalNavigationToggleBar />
        ) : (
          <VerticalNavigationIconBar />
        )}

        <Outlet />
      </LayoutContainer>
      <VerticalNavigationBarDrawer />
    </VerticalNavigationContextProvider>
  )
}

const LayoutContainer: FC<{ children: ReactNode }> = ({ children }) => {
  const { isFullOpen } = useContext(VerticalNavigationContext)

  const theme = useTheme()

  const showIconBar = useMediaQuery(`(max-width: ${theme.breakpoints.values.lg}px)`)
  const hideBar = useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px)`)

  return (
    <Box
      sx={{
        display: hideBar ? 'flex' : 'grid',
        gridTemplateColumns: showIconBar || !isFullOpen ? 'auto 1fr' : '240px 1fr'
      }}
    >
      {children}
    </Box>
  )
}

export const VerticalNavigationToggleBar: FC = () => {
  const { isFullOpen } = useContext(VerticalNavigationContext)

  if (isFullOpen) return <VerticalNavigationBar />

  return <VerticalNavigationIconBar />
}

export const VerticalNavigationBarDrawer: FC = () => {
  const { isOpenDrawer, setIsOpenDrawer } = useContext(VerticalNavigationContext)

  return (
    <Drawer
      anchor={'left'}
      open={isOpenDrawer}
      onClose={() => setIsOpenDrawer(false)}
    >
      <Box sx={{ display: 'flex', gap: 1, padding: '8px 22px' }}>
        <IconButton onClick={() => setIsOpenDrawer(false)}>
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
      <VerticalNavigationBar />
    </Drawer>
  )
}
