import { AppAction, AppState } from './../types';

export const appInitialState: AppState = {
  posts: []
}

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "APP/CREATE_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload]
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