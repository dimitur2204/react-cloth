export interface Action<T = void> {
  type: string
  payload?: T | any
}
