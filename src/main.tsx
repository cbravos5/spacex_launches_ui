import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PageRouter from './PageRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>
)
