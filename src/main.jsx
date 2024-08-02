import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
/* import App from './pages/__app' */
import { ThemeProvider } from 'next-themes'
import App from './pages'







ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</React.StrictMode>
)
