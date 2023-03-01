import { ThemeProvider } from 'styled-components'
import { Toaster } from 'react-hot-toast'

import { theme } from 'styles/theme'
import { GlobalStyles } from 'styles/global'

import { Routes } from 'routes'

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Toaster />
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}
