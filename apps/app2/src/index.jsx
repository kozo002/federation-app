import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './app'

function init() {
  const appContainer = document.getElementById('app')
  ReactDOM.render(<App />, appContainer)
}

init()
