import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface SubjectState {
  //   currentPage: 'home' | 'game' | 'end'
}

const initialState: SubjectState = {
  //   currentPage: 'home',
}

export const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    // changePage: state => {},
    // changePageWithDelay: state => {},
  },
})

// export const { increment, decrement, incrementByAmount } = subjectSlice.actions
export const selectSubject = (state: RootState) => state.subject

export default subjectSlice.reducer
