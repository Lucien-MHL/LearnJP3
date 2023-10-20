import { configureStore } from '@reduxjs/toolkit'
import pageSlice from './reducers/pageSlice'
import subjectSlice from './reducers/subjectSlice'

export const store = configureStore({
  reducer: {
    page: pageSlice,
    subject: subjectSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
