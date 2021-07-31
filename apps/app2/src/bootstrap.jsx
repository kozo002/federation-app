import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'

function init() {
  const appContainer = document.getElementById('app')
  ReactDOM.render(<App />, appContainer)
}

init()
