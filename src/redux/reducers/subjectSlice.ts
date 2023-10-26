import {
  PayloadAction,
  createDraftSafeSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { Keys } from '../../assets/data'
import type { RootState } from '../store'
import data, { Item } from '../../assets/data'

type Payload<T> = PayloadAction<T>

type Record = {
  id: string
  reply: string
  answer: string
  answerStatus: boolean
}

type Option = {
  id: string
  text: string
}

type GameInfo = {
  title: Keys | string
  topic: string
  total: number
  count: number
  record: Record[]
  pronounce: {
    id: string
    answer: string
    options?: Option[]
  }
}

interface SubjectState {
  data: Item[]
  index: number
  gameInfo: GameInfo
}

const initialState: SubjectState = {
  data: [],
  index: 0,
  gameInfo: {
    title: '',
    topic: '',
    total: 0,
    count: 0,
    record: [],
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
      const shuffledData = shuffleArray(data[payload]).slice(0, 5) // TODO: 測試完後要把 Slice 移除。
      state.data = shuffledData
      state.index = 0
      state.gameInfo = {
        title: payload,
        topic: shuffledData[state.index].word,
        total: shuffledData.length,
        count: state.index + 1,
        record: [],
        pronounce: {
          answer: shuffledData[state.index].pronounce,
          id: shuffledData[state.index].id,
        },
      }
      state.index = state.index + 1
    },
    setNextAndRecord: (
      state,
      { payload }: Payload<{ id: string; answer: string; reply: string }>
    ) => {
      if (state.gameInfo.count < state.gameInfo.total) {
        const item = state.data[state.index]
        state.gameInfo.topic = item.word
        state.gameInfo.pronounce.answer = item.pronounce
        state.gameInfo.pronounce.id = item.id
        state.gameInfo.count = state.index + 1
      }
      state.index = state.index + 1
      state.gameInfo.record.splice(0, 0, {
        id: payload.id,
        reply: payload.reply,
        answer: payload.answer,
        answerStatus: payload.reply === payload.answer,
      })
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
