import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Toaster } from 'react-hot-toast'

import { theme } from 'styles/theme'
import { GlobalStyles } from 'styles/global'

import { store } from 'redux/store'

import { App } from 'App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Toaster />

        <App />
        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
