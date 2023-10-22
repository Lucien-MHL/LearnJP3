import {
  PayloadAction,
  createDraftSafeSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { Keys } from '../../assets/data'
import type { RootState } from '../store'
import data, { Item } from '../../assets/data'

type Payload<T> = PayloadAction<T>

type Options = {
  id: string
  text: string
}

type GameInfo = {
  title: string
  topic: string
  total: number
  count: number
  correct: string[]
  wrong: string[]
  pronounce: {
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
  gameInfo: {
    title: '',
    topic: '',
    total: 0,
    count: 0,
    correct: [],
    wrong: [],
    pronounce: {
      id: '',
      answer: '',
    },
  },
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
    setSubjectWithKey: (state, { payload }: Payload<Keys>) => {
      const shuffledData = shuffleArray(data[payload])
      state.dataKey = payload
      state.data = shuffledData
      state.gameInfo = {
        title: payload,
        topic: shuffledData[state.index].word,
        total: shuffledData.length,
        count: state.index + 1,
        correct: [],
        wrong: [],
        pronounce: {
          answer: shuffledData[state.index].pronounce,
          id: shuffledData[state.index].id,
        },
      }
      state.index = state.index + 1
    },
    setNextAndRecord: (
      state,
      { payload }: Payload<{ id: string; isCorrect: boolean }>
    ) => {
      const item = state.data[state.index]
      state.gameInfo.topic = item.word
      state.gameInfo.count = state.index + 1
      state.gameInfo.pronounce.answer = item.pronounce
      state.gameInfo.pronounce.id = item.id
      if (payload.isCorrect) {
        state.gameInfo.correct.splice(0, 0, payload.id)
      } else {
        state.gameInfo.wrong.splice(0, 0, payload.id)
      }
      state.index = state.index + 1
    },
  },
})

export const getSubjectInfoByKey = <K extends keyof GameInfo>(key: K) =>
  createDraftSafeSelector(
    [(state: RootState) => state.subject.gameInfo],
    (gameInfo: GameInfo) => gameInfo[key]
  )

export const { setSubjectWithKey, setNextAndRecord } = subjectSlice.actions
export default subjectSlice.reducer
