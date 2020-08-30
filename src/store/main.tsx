import React, { createContext, useContext } from 'react'
import useUserReducer from './reducers/user.reduser'
import useAppReducer from './reducers/app.reducer'
import { IStore } from './types'

const GlobalStore = createContext<Partial<IStore>>({})

export const useStore = () => useContext(GlobalStore) as IStore

export const StoreProvider: React.FC = ({ children }) => {
  const { appState, appDispatch, createPost, deletePost } = useAppReducer()
  const { userState, userDispatch } = useUserReducer()

  return (
    <GlobalStore.Provider value={{
      appState, appDispatch, userState, userDispatch, createPost, deletePost
    }}>
      {children}
    </GlobalStore.Provider>
  )
}