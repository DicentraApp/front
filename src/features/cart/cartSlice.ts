import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IFlowerItem, ITogetherWith } from '@/common/dto/getFlowersDto'

// export type Product = IFlowerItem | ITogetherWith

export interface ProductWithCount {
  product: IFlowerItem | ITogetherWith
  count: number
  price: number
  priceWithCount: number
}

interface IInitialState {
  cart: Array<ProductWithCount>
  totalPrice: number
}

const cartSlice = createSlice({
  name: '@@cart',
  initialState: {
    cart: [],
    totalPrice: 0,
  } as IInitialState,
  reducers: {
    addItemToCart: (state, { payload }: PayloadAction<ProductWithCount>) => {
      const found = state.cart.find(
        (el) => el.product.id === payload.product.id
      )

      if (found) {
        return
      } else state.cart.push(payload)
    },
    addChocolateToCart: (state, { payload }: PayloadAction<ITogetherWith>) => {
      const found = state.cart.find((el) => el.product.id === payload.id)

      if (found) {
        return
      } else
        state.cart.push({
          product: payload,
          count: 1,
          price: payload.price,
          priceWithCount: payload.price,
        })
    },
    deleteFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((el) => el.product.id !== action.payload)
    },
    setProductCountToUp: (state, action: PayloadAction<string>) => {
      state.cart.map((el) => {
        if (el.product.id === action.payload) {
          el.count += 1
          el.priceWithCount += el.price
        }
      })
    },
    setProductCountToDown: (state, action: PayloadAction<string>) => {
      state.cart.map((el) => {
        if (el.product.id === action.payload) {
          el.count -= 1
          el.priceWithCount -= el.price
        }
      })
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload
    },
  },
})

export const {
  addItemToCart,
  addChocolateToCart,
  deleteFromCart,
  setProductCountToUp,
  setProductCountToDown,
  setTotalPrice,
} = cartSlice.actions

export const cartReducer = cartSlice.reducer
