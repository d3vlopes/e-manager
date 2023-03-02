import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Product {
  id?: string
  productName: string
  category: string
  price: number
  quantity: number
}

interface ProductsState {
  products: Product[]
}

const initialState: ProductsState = {
  products: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload)
    },
    editProduct(state, action: PayloadAction<Product>) {
      const index = state.products.findIndex((p) => p.id === action.payload.id)
      if (index !== -1) {
        state.products[index] = action.payload
      }
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter((p) => p.id !== action.payload)
    },
  },
})

export const { addProduct, editProduct, removeProduct } = productsSlice.actions

export const productsReducer = productsSlice.reducer
