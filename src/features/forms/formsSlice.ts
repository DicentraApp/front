import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IBackCallInfo {
  name: string
  phoneNumber: string
  createdAt: string
}

export interface IInitialState {
  emailNews: string
  backCallInfo: null | IBackCallInfo
}

const formsSlice = createSlice({
  name: '@@forms',
  initialState: {
    emailNews: '',
    backCallInfo: null
  } as IInitialState,
  reducers: {
    getNews: (state, {payload}: PayloadAction<string>) => {
      state.emailNews = payload
    },
    getBackCall: (state, {payload}: PayloadAction<IBackCallInfo>) => {
      state.backCallInfo = payload
    },
  },
})

export const { getNews, getBackCall } = formsSlice.actions

export const formsReducer = formsSlice.reducer
