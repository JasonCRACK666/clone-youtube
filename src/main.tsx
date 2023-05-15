import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from './router'

import { GlobalStyles, ThemeProvider } from '@mui/material'

import CssBaseline from '@mui/material/CssBaseline'

import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            overflowY: 'scroll'
          },
          '::-webkit-scrollbar': {
            width: '16px'
          },
          '::-webkit-scrollbar-track': {
            background: 'transparent'
          },
          '&:not([no-y-overflow])::-webkit-scrollbar-thumb': {
            backgroundColor: '#aaa',
            border: '4px solid transparent',
            backgroundClip: 'content-box',
            borderRadius: '8px'
          },
          'body::-webkit-scrollbar-thumb': {
            backgroundColor: 'hsl(0,0%,67%)',
            backgroundClip: 'content-box',
            borderRadius: '8px'
          },
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#606060',
            transitionDuration: '1s'
          }
        }}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
