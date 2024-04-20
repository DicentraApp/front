import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IBlogItem } from '@/common/dto/getBlogDto'

export interface IInitialState {
  article: IBlogItem
}

const portalSlice = createSlice({
  name: '@@portal',
  initialState: {
    article: {},
  } as IInitialState,
  reducers: {
    setArticle: (state, action: PayloadAction<IBlogItem>) => {
      state.article = action.payload
    },
  },
})

export const { setArticle } = portalSlice.actions

export default portalSlice.reducer