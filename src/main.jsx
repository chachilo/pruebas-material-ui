import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import App from './App'

// Solución para GitHub Pages - Redirección inicial
const root = ReactDOM.createRoot(document.getElementById('root'))

function RootComponent() {
  return (
    <React.StrictMode>
      <HashRouter basename="/pruebas-material-ui">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </HashRouter>
    </React.StrictMode>
  )
}

root.render(<RootComponent />)