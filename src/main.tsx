import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/i18n'
import { GlobalStyle, palette } from './theme.ts'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={palette}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
