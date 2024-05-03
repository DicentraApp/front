import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IFlowerItem, ITogetherWith } from '@/common/dto/getFlowersDto'

type Product = IFlowerItem | ITogetherWith

interface IInitialState {
  cart: Array<Product>
}

const cartSlice = createSlice({
  name: '@@cart',
  initialState: {
    cart: [],
  } as IInitialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload)
    },
  },
})

export const { addToCart } = cartSlice.actions

export const cartReducer = cartSlice.reducer
