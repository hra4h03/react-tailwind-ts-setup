export interface IPost { 
  title: string, 
  id: string 
} 

export interface IUser { 
  name: string, 
  emmail?: string,
  id: string 
} 

export type APP_STATE = {
  posts: IPost[]
}
export enum APP {
  CREATE_POST = "APP_CREATE_POST", 
  DELETE_POST = "APP_DELETE_POST",
}
export type APP_ACTIONS = 
  { type: APP.CREATE_POST, payload: { post: IPost }}  | 
  { type: APP.DELETE_POST, payload: { id: string } }  

export enum USER {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT"
}
export type USER_STATE = {
  authorized: boolean,
  user: IUser | null
}

export type USER_ACTIONS = 
  { type: USER.SIGN_IN, payload: { user: IUser }}  | 
  { type: USER.SIGN_OUT }  

export interface IStore {
  appState: APP_STATE
  appDispatch: React.Dispatch<APP_ACTIONS>
  createPost: (post: IPost) => void
  deletePost: (postId: string) => void
  userState: USER_STATE
  userDispatch: React.Dispatch<USER_ACTIONS>
}
