import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { flowSlice } from './flow'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    flow: flowSlice.reducer,
  },
})