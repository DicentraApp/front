import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
  reviewsModal: boolean
}

const modalSlice = createSlice({
  name: '@@modal',
  initialState: {
    reviewsModal: false,
  } as IInitialState,
  reducers: {
    setReviewsModal: (state, action: PayloadAction<boolean>) => {
      state.reviewsModal = action.payload
    },
  },
})

export const { setReviewsModal } = modalSlice.actions

export const modalReducer = modalSlice.reducer
