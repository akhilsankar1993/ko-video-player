import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/app'
import { createStore } from 'redux'
import { videoApp } from './reducers/index'

let store = createStore(videoApp)

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
