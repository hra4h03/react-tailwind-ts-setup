import { APP_ACTIONS, IPost, APP } from './../types/index';

export const useAppActions = (dispatch: React.Dispatch<APP_ACTIONS>) => {
  const createPost = (post: IPost) => {
    dispatch({
      type: APP.CREATE_POST,
      payload: { post }
    })
  }

  const deletePost = (postId: string) => {
    dispatch({
      type: APP.DELETE_POST,
      payload: { id: postId }
    })
  }
  return {
    createPost, deletePost
  }
}