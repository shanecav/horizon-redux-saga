import { eventChannel, takeLatest } from 'redux-saga'
import { take, call, put, cancelled } from 'redux-saga/effects'

import hz from '../../horizon/api'
import {
  WATCH_MESSAGES,
  newMessages
} from '../actions'

const hzWatchMessagesChannel = (limit = 10) => {
  return eventChannel((emitter) => {
    const hzMessages$ = hz('messages').order('datetime', 'descending').limit(limit).watch().subscribe(
      messages => emitter({ messages })
    )
    return () => hzMessages$.unsubscribe()
  })
}

export function * watchMessages (action) {
  const channel = yield call(hzWatchMessagesChannel, action.payload)
  try {
    while (true) {
      let data = yield take(channel)
      if (data.messages) {
        yield put(newMessages(data.messages))
      }
    }
  } finally {
    if (yield cancelled()) {
      channel.close()
    }
  }
}

export default function * watchWatchMessages () {
  yield * takeLatest(WATCH_MESSAGES, watchMessages)
}
