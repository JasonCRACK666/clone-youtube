import { FC, SyntheticEvent, useState } from 'react'

import { Modal, Box, Tabs, Tab } from '@mui/material'

import { SignInTab } from './SignInTab'
import { SignUpTab } from './SignUpTab'

interface Props {
  handleClose: () => void
  openModal: boolean
}

export const AuthenticationModal: FC<Props> = ({ handleClose, openModal }) => {
  const [value, setValue] = useState(0)

  const handleChange = (_e: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Modal open={openModal} onClose={handleClose} aria-labelledby="auth-modal">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'primary.dark',
          borderRadius: '10px',
          p: 1.5,
        }}
      >
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
          >
            <Tab
              label="Sign In"
              id={'auth-tabpanel-0'}
              aria-controls={'auth-tabpanel-0'}
            />
            <Tab
              label="Sign Up"
              id={'auth-tabpanel-1'}
              aria-controls={'auth-tabpanel-1'}
            />
          </Tabs>
        </Box>

        <SignInTab value={value} index={0} />
        <SignUpTab value={value} index={1} />
      </Box>
    </Modal>
  )
}
