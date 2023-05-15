import { FC, useState } from 'react'

import { Button } from '@mui/material'

import { AccountCircle as AccountIcon } from '@mui/icons-material'
import { AuthenticationModal } from './AuthenticationModal'

export const AccessButton: FC = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  return (
    <>
      <Button
        variant="outlined"
        color={'info'}
        size={'small'}
        onClick={handleOpen}
        startIcon={<AccountIcon sx={{ width: 30, height: 30 }} />}
        sx={{
          borderRadius: '30px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        Access
      </Button>

      <AuthenticationModal handleClose={handleClose} openModal={openModal} />
    </>
  )
}
