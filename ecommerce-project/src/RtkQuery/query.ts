import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { productsApi } from './productsApi'
import cartReducer from '../store/cartSlice/cartSlice'
import userReducer from '../store/userSlice/userSlice'
import { feedbackApi } from './feedbackApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [feedbackApi.reducerPath]: feedbackApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productsApi.middleware,
      feedbackApi.middleware,
    ]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
