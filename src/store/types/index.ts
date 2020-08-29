interface IPost { 
  title: string, 
  id: string 
} 


export type AppState = {
  posts: IPost[]
}

export type AppAction = 
  { type: "APP/CREATE_POST", payload: IPost}  | 
  { type: "APP/DELETE_POST", payload: { id: string } }  

export type UserState = {
  posts: IPost[]
}

export type UserAction = 
  { type: "USER/CREATE_POST", payload: IPost}  | 
  { type: "USER/DELETE_POST", payload: { id: string } }  



export interface IStore {
  appState: AppState
  appDispatch: React.Dispatch<AppAction>
  userState: UserState
  userDispatch: React.Dispatch<UserAction>
}
