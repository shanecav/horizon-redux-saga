'use strict'

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import Root from './root/Root'
import configureStore from './root/store/configureStore'
import rootSaga from './root/sagas'
import { watchMessages } from './chat/actions'

const store = configureStore()
store.runSaga(rootSaga)

store.dispatch(watchMessages(10))

const appNode = document.createElement('div')
document.body.appendChild(appNode)

const renderRoot = (RootComponent) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <RootComponent />
      </Provider>
    </AppContainer>,
    appNode
  )
}
renderRoot(Root)

if (module.hot) {
  module.hot.accept('./root/Root', () => {
    const Root = require('./root/Root').default
    renderRoot(Root)
  })
}
