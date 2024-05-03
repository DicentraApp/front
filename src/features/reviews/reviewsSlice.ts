import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
  reviewsFormModal: boolean
}

const reviewsSlice = createSlice({
  name: '@@reviews',
  initialState: {
    reviewsFormModal: false,
  } as IInitialState,
  reducers: {
    setReviewsModal: (state, action: PayloadAction<boolean>) => {
      state.reviewsFormModal = action.payload
    },
  },
})

export const { setReviewsModal } = reviewsSlice.actions

export const reviewsReducer = reviewsSlice.reducer
