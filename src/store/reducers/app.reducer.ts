import { useReducer } from 'react';
import { APP_STATE, APP_ACTIONS } from '../types/app.types';
import { useAppActions } from '../action/app.actions';

export const appInitialState: APP_STATE = {

}
const appReducer = (state: APP_STATE = appInitialState, action: APP_ACTIONS): APP_STATE => {
  switch (action.type) {
    case  'APP_CREATE_WORD': 
      return {
        ...state,
      }
    default:
      return state
  }
}

export default function useAppReducer() {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState)
  return { appState, appDispatch, ...useAppActions(appDispatch) }
} 