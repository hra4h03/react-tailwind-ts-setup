import React, { createContext, useContext } from 'react'
import useAppReducer from './reducers/app.reducer'
import IStore from './types'

type IContext = IStore<{ 
  app: ReturnType<typeof useAppReducer>, 
}>

const GlobalContext = createContext<Partial<IContext | undefined>>(undefined)

export const useAppNampespace = () => useContext(GlobalContext)!.app 

export const StoreProvider: React.FC = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ 
      app: useAppReducer(), 
    }}>
      {children}
    </GlobalContext.Provider>
  )
}