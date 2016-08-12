import createSagaMiddleware from 'redux-saga'
import { compose, applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'

import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(sagaMiddleware, createLogger()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      ),
    ),
    runSaga: sagaMiddleware.run
  }
}
