export interface IPost { 
  title: string, 
  id: string 
} 

export interface IUser { 
  name: string, 
  emmail?: string,
  id: string 
} 

export type AppState = {
  posts: IPost[]
}

export type AppAction = 
  { type: "APP/CREATE_POST", payload: { post: IPost }}  | 
  { type: "APP/DELETE_POST", payload: { id: string } }  


export type UserState = {
  authorized: boolean,
  user: IUser | null
}

export type UserAction = 
  { type: "USER/SIGN_IN", payload: { user: IUser }}  | 
  { type: "USER/SIGN_OUT" }  

export interface IStore {
  appState: AppState
  appDispatch: React.Dispatch<AppAction>
  createPost: (post: IPost) => void
  deletePost: (postId: string) => void
  userState: UserState
  userDispatch: React.Dispatch<UserAction>

}
