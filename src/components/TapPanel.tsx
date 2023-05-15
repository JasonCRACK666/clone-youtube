import { FC, ReactNode } from 'react'

import { Box } from '@mui/material'

interface Props {
  children?: ReactNode
  index: number
  value: number
}

export const TabPanel: FC<Props> = props => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`auth-tabpanel-${index}`}
      aria-labelledby={`auth-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3, px: 2 }}>{children}</Box>}
    </div>
  )
}
