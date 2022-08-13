import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { store } from './store/store'
import './styles.css'
import { ThisFlowApp } from './ThisFlowApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/*Change BrowserRouter to HashRouter */}
        <ThisFlowApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
