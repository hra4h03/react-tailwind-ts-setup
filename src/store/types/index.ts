import * as APP_TYPES from './app.types'
type IStore<T> = {
  [k in keyof T]: T[k]
}
export { APP_TYPES }
export default IStore
