import { IUserData, IUserDelivery } from '@/common/dto/getOrderDto'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ICardData {
  cardIndex: number
  cardOffset: number
}

interface IPaymentData {
  cardNumber: string
  cardExpiration: string
  cardCvv: string
  cardOwner: string
}

export interface IInitialState {
  data: IUserData
  delivery: IUserDelivery
  noteMessage: string
  activeCardData: ICardData
  payment: string
  paymentData: IPaymentData
  orderNumber: number
  paymentStatus: 'paid' | 'cash'
}

const inState = {
  data: {},
  delivery: {},
  noteMessage: '',
  activeCardData: {},
  payment: '',
  paymentData: {},
  orderNumber: 0,
  paymentStatus: '',
}

const orderSlice = createSlice({
  name: '@@order',
  initialState: inState as IInitialState,
  reducers: {
    addData: (state, { payload }: PayloadAction<IUserData>) => {
      state.data = payload
    },
    addDelivery: (state, { payload }: PayloadAction<IUserDelivery>) => {
      state.delivery = payload
    },
    setNoteMessage: (state, { payload }: PayloadAction<string>) => {
      state.noteMessage = payload
    },
    setActiveCardData: (state, { payload }: PayloadAction<ICardData>) => {
      state.activeCardData = payload
    },
    setPayment: (state, { payload }: PayloadAction<string>) => {
      state.payment = payload
    },
    setPaymentData: (state, { payload }: PayloadAction<IPaymentData>) => {
      state.paymentData = payload
    },
    setOrderNumber: (state, { payload }: PayloadAction<number>) => {
      state.orderNumber = payload
    },
    setPaymentStatus: (state, { payload }: PayloadAction<'paid' | 'cash'>) => {
      state.paymentStatus = payload
    },
    resetOrder: (state) => {
      Object.assign(state, inState)
    },
  },
})

export const {
  addData,
  addDelivery,
  setNoteMessage,
  setActiveCardData,
  setPayment,
  setPaymentData,
  setPaymentStatus,
  resetOrder,
  setOrderNumber,
} = orderSlice.actions

export const orderReducer = orderSlice.reducer
