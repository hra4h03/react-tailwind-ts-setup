import { USER_ACTIONS, USER_STATE, USER } from '../types';
import { useReducer } from 'react';


const userInitialState: USER_STATE = {
  authorized: false,
  user: null
}

const userReducer = (state: USER_STATE, action: USER_ACTIONS): USER_STATE => {
  switch (action.type) {
    case USER.SIGN_IN:
      return {
        ...state,
        authorized: true,
        user: action.payload.user
      }
    case USER.SIGN_OUT:
      return {
        ...state,
        user: null,
        authorized: false
      }  
    default: return state
  }
}

export default function useUserReducer() {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState)
  return { userState, userDispatch }
}