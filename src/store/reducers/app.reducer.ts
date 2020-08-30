import { useReducer } from 'react';
import { AppState, AppAction } from '../types';
import { useAppActions } from '../actions/app.actions';

const appInitialState: AppState = {
  posts: []
}
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "APP/CREATE_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload.post]
      }
    case "APP/DELETE_POST":
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