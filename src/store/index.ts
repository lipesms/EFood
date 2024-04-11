import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import CartSlice from './reducers/cart'

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
