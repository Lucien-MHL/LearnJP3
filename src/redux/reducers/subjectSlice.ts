import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Keys } from '../../assets/data'
import type { RootState } from '../store'

interface SubjectState {
  dataKey?: Keys
}

const initialState: SubjectState = {}

export const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    setSubjectWithKey: (
      state,
      { payload }: PayloadAction<SubjectState['dataKey']>
    ) => {
      state.dataKey = payload
    },
    // changePageWithDelay: state => {},
  },
})

export const { setSubjectWithKey } = subjectSlice.actions
export const selectSubject = (state: RootState) => state.subject

export default subjectSlice.reducer
