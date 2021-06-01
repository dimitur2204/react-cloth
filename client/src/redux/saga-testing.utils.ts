import { runSaga, Saga } from 'redux-saga'
import { Action } from './helpers'

export async function recordSaga(saga: Saga<any>, initialAction: Action) {
  const dispatched: Action[] = []

  await runSaga(
    {
      dispatch: (action: Action) => dispatched.push(action),
    },
    saga,
    initialAction,
  )

  return dispatched
}
