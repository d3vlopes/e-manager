/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from '@reduxjs/toolkit'

import { productsReducer } from './features/product/productSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}

if (
  process.env.NODE_ENV === 'development' &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  window.__REDUX_DEVTOOLS_EXTENSION__.connect()
}
