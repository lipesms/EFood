import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MenuItem } from '../../pages/Home'

type CartState = {
  items: MenuItem[]
  cartIsOpen: boolean
  deliverySection: boolean
  paymentSection: boolean
  paymentCompleted: boolean
}

const initialState: CartState = {
  items: [],
  cartIsOpen: false,
  deliverySection: false,
  paymentSection: false,
  paymentCompleted: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id)

      if (!item) {
        state.items.push(action.payload)
      } else {
        alert('Item já adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    openCart: (state) => {
      state.cartIsOpen = true
    },
    closeCart: (state) => {
      state.cartIsOpen = false
    },
    openDeliveries: (state) => {
      state.deliverySection = true
    },
    closeDeliveries: (state) => {
      state.deliverySection = false
    },
    tooglePayment: (state, action: PayloadAction<boolean>) => {
      state.paymentSection = action.payload
    },
    concludePayment: (state) => {
      state.paymentCompleted = true
      state.items = []
    },
    resetPayment: (state) => {
      state.paymentCompleted = false
    }
  }
})

export const {
  add,
  remove,
  openCart,
  closeCart,
  openDeliveries,
  closeDeliveries,
  tooglePayment,
  concludePayment,
  resetPayment
} = cartSlice.actions
export default cartSlice.reducer
