import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { User } from 'firebase/auth'

interface AuthStoreState {
  isAuth: boolean
  user: User | null
  loadingAuth: boolean
}

interface AuthStoreActions {
  logOut: () => void
  login: (user: User) => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create(
  devtools<AuthStoreState & AuthStoreActions>(
    set => ({
      isAuth: false,
      user: null,
      loadingAuth: true,
      logOut: () => set(() => ({ isAuth: false, user: null, loadingAuth: false })),
      login: user => set(() => ({ isAuth: true, user, loadingAuth: false })),
      setLoading: loading => set(() => ({ loadingAuth: loading }))
    })
  )
)
