import { apiSlice } from '@/features/api/apiSlise'
import { configureStore } from '@reduxjs/toolkit'
import flowersSlice from './flowers/flowersSlice'

export const store = configureStore({
  reducer: {
    flowers: flowersSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
