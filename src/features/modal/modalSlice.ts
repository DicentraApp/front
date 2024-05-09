import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Status = 'success' | 'error' | 'idle'

interface IInitialState {
  reviewsModal: boolean
  loginModal: boolean
  registrationModal: boolean
  registrationStatus: Status
}

const modalSlice = createSlice({
  name: '@@modal',
  initialState: {
    reviewsModal: false,
    loginModal: true,
    registrationModal: false,
    registrationStatus: 'idle',
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
    setRegistrationStatus: (state, action: PayloadAction<Status>) => {
      state.registrationStatus = action.payload
    },
  },
})

export const {
  setReviewsModal,
  setLoginModal,
  setRegistrationModal,
  setRegistrationStatus,
} = modalSlice.actions

export const modalReducer = modalSlice.reducer
