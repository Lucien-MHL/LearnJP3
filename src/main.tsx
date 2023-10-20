import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/i18n'
import { GlobalStyle, palette } from './theme.ts'
import { ThemeProvider } from 'styled-components'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={palette}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
