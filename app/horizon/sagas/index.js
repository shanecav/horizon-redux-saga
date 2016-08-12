import { eventChannel } from 'redux-saga'
import { take, put } from 'redux-saga/effects'

import hz from '../../horizon/api'
import { horizonStatus } from '../../horizon/actions'

const hzStatusChannel = eventChannel((emitter) => {
  const hzStatus$ = hz.status((status) => {
    if (status) emitter(status)
  })
  return () => hzStatus$.unsubscribe()
})

export default function * horizonSaga () {
  while (true) {
    let hzStatus = yield take(hzStatusChannel)
    yield put(horizonStatus(hzStatus.type))
  }
}
