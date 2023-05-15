import { red, grey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: grey[800],
      light: grey[700],
      dark: '#121212'
    },
    secondary: {
      main: red[500]
    }
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          padding: '6px 12px'
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '45px'
        }
      }
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: '45px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.primary.light
          }
        })
      }
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          color: 'white',
          fontSize: '1.1rem',
          lineHeight: 1,
          paddingTop: '8px',
          paddingBottom: '8px'
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: () => ({
          backgroundImage: 'none'
        })
      }
    }
  }
})
