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
    <div>
      <input {...postInput.bind} />
      <button onClick={clickHandler}>Add Post</button>
      <pre>{JSON.stringify(appState.posts, null, 2)}</pre>
      {appState.posts.map(post => {
        return <div key={post.id}>
          {post.title} <button onClick={() => deletePost(post.id)} > delete </button>
        </div>
      })}
    </div>
  )
}
