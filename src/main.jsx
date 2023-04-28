import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConnectionContextProvider } from './contexts/connection.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConnectionContextProvider>
      <App/>
    </ConnectionContextProvider>
  </React.StrictMode>,
)
