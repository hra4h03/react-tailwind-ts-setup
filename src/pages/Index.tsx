import React from 'react'
import { useStore } from '../store/main'
import { useInputBind } from '../hooks/useInputBind'

export const Index = () => {
  const postInput = useInputBind()
  const { appState, createPost, deletePost } = useStore()
  const clickHandler = () => {
    if(postInput.value) {
      createPost({ title: postInput.value, id: Date.now().toString() })
      postInput.clear()
    }
  }
  return (
    <div className="p-4">
      <input className="input" {...postInput.bind} />
      <button className="btn ml-3" onClick={clickHandler}>Add Post</button>
      {appState.posts.map(post => {
        return <div key={post.id} className="bg-gray-400 rounded p-3 my-2 flex justify-between items-center shadow-md">
          <p className="text-gray-800 capitalize text-lg truncate pr-4">{post.title}</p> <button className="btn btn-red" onClick={() => deletePost(post.id)} > delete </button>
        </div>
      })}
    </div>
  )
}
