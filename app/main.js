import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'

import ConnectedApp from './components/app'
import { videoApp } from './reducers/index'

const logger = createLogger()

let store = createStore(
  videoApp,
  applyMiddleware(logger)
)

render (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
)
