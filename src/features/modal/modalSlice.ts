import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
  reviewsModal: boolean
  loginModal: boolean
  registrationModal: boolean
  paymentModal: boolean
  successModal: boolean
}

const modalSlice = createSlice({
  name: '@@modal',
  initialState: {
    reviewsModal: false,
    loginModal: false,
    registrationModal: false,
    paymentModal: false,
    successModal: false,
  } as IInitialState,
  reducers: {
    setReviewsModal: (state, action: PayloadAction<boolean>) => {
      state.reviewsModal = action.payload
    },
    setLoginModal: (state, action: PayloadAction<boolean>) => {
      state.loginModal = action.payload
    },
    setRegistrationModal: (state, action: PayloadAction<boolean>) => {
      state.registrationModal = action.payload
    },
    setPaymentModal: (state, action: PayloadAction<boolean>) => {
      state.paymentModal = action.payload
    },
    setSuccessModal: (state, action: PayloadAction<boolean>) => {
      state.successModal = action.payload
    },
    resetAllModal: (state) => {
      state.loginModal = false
      state.registrationModal = false
      state.reviewsModal = false
    },
  },
})

export const {
  setReviewsModal,
  setLoginModal,
  setRegistrationModal,
  resetAllModal,
  setPaymentModal,
  setSuccessModal,
} = modalSlice.actions

export const modalReducer = modalSlice.reducer
