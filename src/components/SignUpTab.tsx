import { FC } from 'react'

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db } from '../firebase'

import { doc, setDoc } from 'firebase/firestore'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button, TextField } from '@mui/material'

import { TabPanel } from './TapPanel'

interface SignUpForm {
  email: string
  username: string
  password: string
}

interface Props {
  value: number
  index: number
}

const signInSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Is required'),
  username: yup.string().min(3, 'Minimum 3 characters').max(15, 'Maximum 15 characters').required(),
  password: yup.string().min(5, 'Minimum 4 characters').required('Is required')
}).required()

export const SignUpTab: FC<Props> = ({ value, index }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpForm>({
    resolver: yupResolver(signInSchema)
  })

  const onSubmit = async (data: SignUpForm) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await updateProfile(user, {
        displayName: data.username
      })

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        username: data.username,
        avatar: user.photoURL
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TabPanel value={value} index={index}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          color='info'
          variant="outlined"
          label="Username"
          type="text"
          sx={{ mb: 2 }}
          {...register('username')}
          error={Boolean(errors.username)}
          helperText={errors.username?.message}
        />

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
          Create account
        </Button>
      </form>
    </TabPanel>
  )
}
