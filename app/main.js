import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

import { createStore } from 'redux'
import { videoApp } from './reducers/index'

let store = createStore(videoApp)

render (
  <App />,
  document.getElementById('root')
)
