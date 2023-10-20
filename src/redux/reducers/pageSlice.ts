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
    changePage: (
      state,
      { payload }: PayloadAction<PageState['currentPage']>
    ) => {
      state.currentPage = payload
    },
    changePageWithDelay: (
      state,
      { payload }: PayloadAction<PageState['currentPage']>
    ) => {
      setTimeout(() => {
        state.currentPage = payload
      }, 1500)
    },
  },
})

export const { changePage, changePageWithDelay } = pageSlice.actions
export const selectPageById = createDraftSafeSelector(
  [(state: RootState) => state.page],
  page => page['currentPage']
)

export default pageSlice.reducer
