import { fork } from 'redux-saga/effects'

import watchWatchMessages from './watchMessages'
import watchAddMessage from './addMessage'

export default function * chatSaga () {
  yield fork(watchWatchMessages)
  yield fork(watchAddMessage)
}
