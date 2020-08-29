import React, { createContext, useReducer, useContext } from 'react'
import { IStore,  } from './types'
import { appReducer, appInitialState } from './reducers/appReducer'
import { userReducer, userInitialState } from './reducers/userReduser'

const GlobalStore = createContext<Partial<IStore>>({})

export const useStore = () => useContext(GlobalStore)

export const StoreProvider: React.FC = ({ children }) => {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState)
  const [userState, userDispatch] = useReducer(userReducer, userInitialState)

  return (
    <GlobalStore.Provider value={{
      appState, appDispatch, userState, userDispatch
    }}>
      {children}
    </GlobalStore.Provider>
  )
}
