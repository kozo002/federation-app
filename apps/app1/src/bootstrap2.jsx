import React from 'react'
import ReactDOM from 'react-dom'
import * as Vue from 'vue'
console.log(Vue)

import { App } from './App'

async function init() {
  const appContainer = document.getElementById('app')
  ReactDOM.render(<App />, appContainer)

  const { App: App2 } = await import('app2/App')
  const app2Container = document.getElementById('app2') 
  ReactDOM.render(<App2 />, app2Container)

  const hello = await import('app3/hello')
  Vue.createApp(hello).mount('#app3')
}

init()