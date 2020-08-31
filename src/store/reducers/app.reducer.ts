import { useReducer } from 'react';
import { APP_STATE, APP_ACTIONS, APP } from '../types';
import { useAppActions } from '../actions/app.actions';

const appInitialState: APP_STATE = {
  posts: []
}
const appReducer = (state: APP_STATE, action: APP_ACTIONS): APP_STATE => {
  switch (action.type) {
    case APP.CREATE_POST: 
      return {
        ...state,
        posts: [...state.posts, action.payload.post]
      }
    case APP.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload.id)
      }          
    default:
      return state
  }
}

export default function useAppReducer() {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState)
  const { deletePost, createPost } = useAppActions(appDispatch)

  return { appState, appDispatch, deletePost, createPost }
} 