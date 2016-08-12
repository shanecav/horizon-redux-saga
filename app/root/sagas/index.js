import { fork } from 'redux-saga/effects'

import horizonSaga from '../../horizon/sagas'
import chatSaga from '../../chat/sagas'

export default function * rootSaga () {
  yield fork(horizonSaga)
  yield fork(chatSaga)
}
