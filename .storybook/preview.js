import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { theme } from '../src/styles/theme'
import { GlobalStyles } from '../src/styles/global'

import { store } from '../src/redux/store'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <Story />
      </Provider>
    </ThemeProvider>
  ),
]
