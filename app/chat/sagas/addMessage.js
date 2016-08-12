import { eventChannel, takeEvery } from 'redux-saga'
import { take, call, put, cancelled } from 'redux-saga/effects'

import hz from '../../horizon/api'
import {
  ADD_MESSAGE_REQUEST,
  addMessageSuccess,
  addMessageFailure
} from '../actions'

const hzAddMessageChannel = (message) => {
  return eventChannel((emitter) => {
    const hzAddMessage$ = hz('messages').store(message).subscribe(
      id => emitter({ id }),
      err => emitter({ err })
    )
    return () => hzAddMessage$.unsubscribe()
  })
}

export function * addMessage (action) {
  const channel = yield call(hzAddMessageChannel, action.payload)
  try {
    while (true) {
      let data = yield take(channel)
      if (data.id) {
        yield put(addMessageSuccess(data.id, action.payload))
      } else if (data.err) {
        yield put(addMessageFailure(data.err, action.payload))
      }
    }
  } finally {
    if (yield cancelled()) {
      channel.close()
    }
  }
}

export default function * watchAddMessage () {
  yield * takeEvery(ADD_MESSAGE_REQUEST, addMessage)
}
