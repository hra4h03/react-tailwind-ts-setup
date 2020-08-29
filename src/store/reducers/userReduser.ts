import { UserAction, UserState } from './../types';

export const userInitialState: UserState = {
  posts: []
}

export const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "USER/CREATE_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    case "USER/DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload.id)
      }  
    default:
      return state
  }
}