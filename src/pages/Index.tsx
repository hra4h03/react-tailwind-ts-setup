import React from 'react'
import { useStore } from '../store/main'

export const Index = () => {
  const { appState, appDispatch } = useStore()
  const clickHandler = () => {
    appDispatch && appDispatch({ 
      type: "APP/CREATE_POST", 
      payload: {
        id: Date.now().toString(),
        title: "lorem ipsum"
      } 
    })
  }
  return (
    <div>
      <button onClick={clickHandler}>Add Post</button>
      <pre>{JSON.stringify(appState?.posts, null, 2)}</pre>
    </div>
  )
}
