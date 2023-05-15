import { FC } from 'react'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

import { useAuthStore } from '../store/useAuthStore'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button, TextField } from '@mui/material'

import { TabPanel } from './TapPanel'

const signInSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Is required'),
  password: yup.string().min(5, 'Minimum 4 characters').required('Is required')
}).required()

interface Props {
  value: number
  index: number
}

interface SignInForm {
  email: string
  password: string
}

export const SignInTab: FC<Props> = ({ value, index }) => {
  const { login, logOut } = useAuthStore()

  const { register, handleSubmit, formState: { errors } } = useForm<SignInForm>({
    resolver: yupResolver(signInSchema)
  })

  const onSubmit = async (data: SignInForm) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      login(user)
    } catch (error) {
      logOut()
    }
  }

  return (
    <TabPanel value={value} index={index}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          color='info'
          variant="outlined"
          label="Email"
          type="email"
          sx={{ mb: 2 }}
          {...register('email')}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />

        <TextField
          fullWidth
          variant="outlined"
          color='info'
          label="Password"
          type="password"
          sx={{ mb: 2 }}
          {...register('password')}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
        />

        <Button type="submit" fullWidth variant="contained">
          Login
        </Button>
      </form>
    </TabPanel>
  )
}
