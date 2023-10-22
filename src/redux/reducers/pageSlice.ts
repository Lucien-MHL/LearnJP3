import { createSlice, createDraftSafeSelector } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export enum PageName {
  home = 'home',
  game = 'game',
  end = 'end',
}

interface PageState {
  currentPage: PageName
}

const initialState: PageState = {
  currentPage: PageName.home,
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePage: (state, { payload }: PayloadAction<PageName>) => {
      state.currentPage = payload
    },
  },
})

export const selectPageByKey = <K extends keyof PageState>(key: K) =>
  createDraftSafeSelector([(state: RootState) => state.page], page => page[key])

export const { changePage } = pageSlice.actions
export default pageSlice.reducer
