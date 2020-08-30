import { AppAction, IPost } from './../types/index';

export const useAppActions = (dispatch: React.Dispatch<AppAction>) => {
  const createPost = (post: IPost) => {
    dispatch({
      type: "APP/CREATE_POST",
      payload: { post }
    })
  }

  const deletePost = (postId: string) => {
    dispatch({
      type: "APP/DELETE_POST",
      payload: { id: postId }
    })
  }
  return {
    createPost, deletePost
  }
}