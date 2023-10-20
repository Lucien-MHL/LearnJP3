import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface PageState {
  currentPage: 'home' | 'game' | 'end'
}

const initialState: PageState = {
  currentPage: 'home',
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    // changePage: state => {},
    // changePageWithDelay: state => {},
  },
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectPage = (state: RootState) => state.page

export default pageSlice.reducer
