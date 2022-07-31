import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store'
import './styles.css'
import { ThisFlowApp } from './ThisFlowApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThisFlowApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
