import {
  PayloadAction,
  createDraftSafeSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { Keys } from '../../assets/data'
import type { RootState } from '../store'
import data, { Item } from '../../assets/data'

interface Options {
  id: string
  text: string
}

interface GameInfo {
  title?: string
  topic?: string
  total?: number
  count?: number
  correct?: string[]
  wrong?: string[]
  pronounce?: {
    id: string
    answer: string
    options?: Options[]
  }
}

interface SubjectState {
  data: Item[]
  index: number
  gameInfo: GameInfo
  dataKey?: Keys
}

const initialState: SubjectState = {
  data: [],
  index: 0,
  gameInfo: {},
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

export const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    setSubjectWithKey: (state, { payload }: PayloadAction<Keys>) => {
      const shuffledData = shuffleArray(data[payload])
      state.dataKey = payload
      state.data = shuffledData
      state.gameInfo = {
        title: payload,
        topic: shuffledData[state.index].word,
        total: shuffledData.length,
        count: state.index + 1,
        pronounce: {
          answer: shuffledData[state.index].pronounce,
          id: shuffledData[state.index].id,
        },
      }
    },
  },
})

export const selectSubjectInfoByKey = (key: keyof GameInfo) =>
  createDraftSafeSelector(
    [(state: RootState) => state.subject],
    (subject: SubjectState) => subject.gameInfo[key]
  )

export const { setSubjectWithKey } = subjectSlice.actions
export default subjectSlice.reducer
