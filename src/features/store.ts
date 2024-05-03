import storage from 'redux-persist/lib/storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import persistStore from 'redux-persist/es/persistStore'
import { persistReducer } from 'redux-persist'
import { apiSlice } from '@/features/api/apiSlise'
import { flowersReducer } from './flowers/flowersSlice'
import { portalReducer } from './portal/portalSlice'
import { reviewsReducer } from './reviews/reviewsSlice'
import { cartReducer } from './cart/cartSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['portal', 'cart'],
}

const rootReducer = combineReducers({
  flowers: flowersReducer,
  portal: portalReducer,
  reviews: reviewsReducer,
  cart: cartReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
