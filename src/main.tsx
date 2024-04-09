import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/App'
import { Provider } from 'react-redux'
import { store } from './features/store'

import './index.css'

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser')
  return worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root')!)

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
})
