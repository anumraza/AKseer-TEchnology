import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode basename="/AKseer-TEchnology/">
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)