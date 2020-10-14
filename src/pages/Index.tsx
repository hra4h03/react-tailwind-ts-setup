import React from 'react'
import { useInputBind } from '../hooks/useInputBind'

export const Index = () => {
  const postInput = useInputBind()
  return (
    <div className="p-4">
      <input className="input" onCopy={(e) => console.log(e)} {...postInput.bind} />
      <button className="btn ml-3">Add Post</button>
    </div>
  )
}
