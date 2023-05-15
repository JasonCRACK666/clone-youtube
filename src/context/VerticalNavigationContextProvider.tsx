import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState
} from 'react'

interface ContextInitialValue {
  isFullOpen: boolean
  isOpenDrawer: boolean
  setIsFullOpen: Dispatch<SetStateAction<boolean>>
  setIsOpenDrawer: Dispatch<SetStateAction<boolean>>
}

export const VerticalNavigationContext = createContext<ContextInitialValue>({
  isFullOpen: true,
  isOpenDrawer: false,
  setIsFullOpen: () => { },
  setIsOpenDrawer: () => { }
})

const VerticalNavigationContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isFullOpen, setIsFullOpen] = useState<ContextInitialValue['isFullOpen']>(true)
  const [isOpenDrawer, setIsOpenDrawer] = useState<ContextInitialValue['isOpenDrawer']>(false)

  return (
    <VerticalNavigationContext.Provider value={{
      isFullOpen,
      setIsFullOpen,
      isOpenDrawer,
      setIsOpenDrawer
    }}>
      {children}
    </VerticalNavigationContext.Provider>
  )
}

export default VerticalNavigationContextProvider
