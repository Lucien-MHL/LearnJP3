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
  word: string
  answerStatus: boolean
}

export type Option = {
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

function setOptions(array: Item[], index: number = 0): Option[] {
  const toShuffled = shuffleArray(array.filter((_, i) => i !== index))
  const shuffledWithAnswer = shuffleArray([
    array[index],
    ...toShuffled.slice(0, 5),
  ])
  return shuffledWithAnswer.map(item => ({ id: item.id, text: item.pronounce }))
}

export const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    setSubjectWithKey: (state, { payload }: Payload<Keys>) => {
      const shuffledData = shuffleArray(data[payload])
      const shouldSetOptions = window.screen.width < 1024
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
          options: shouldSetOptions ? setOptions(shuffledData) : undefined,
        },
      }
      state.index = state.index + 1
    },
    setNextAndRecord: (
      state,
      { payload }: Payload<{ id: string; answer: string; reply: string }>
    ) => {
      state.gameInfo.record.splice(0, 0, {
        id: payload.id,
        reply: payload.reply,
        answer: payload.answer,
        word: state.gameInfo.topic,
        answerStatus: payload.reply === payload.answer,
      })
      if (state.gameInfo.count < state.gameInfo.total) {
        const data = state.data
        const index = state.index
        const item = data[index]
        const shouldSetOptions = state.gameInfo.pronounce.options
        state.gameInfo.topic = item.word
        state.gameInfo.pronounce.options = shouldSetOptions
          ? setOptions(data, index)
          : undefined
        state.gameInfo.pronounce.answer = item.pronounce
        state.gameInfo.pronounce.id = item.id
        state.gameInfo.count = state.index + 1
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
