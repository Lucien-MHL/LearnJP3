import data from './data.json'

export interface Item {
  word: string
  pronounce: string
  id: string
}

export enum Keys {
  'hiragana-seion' = 'hiragana-seion',
  'katakana-seion' = 'katakana-seion',
  'hiragana-dakuon' = 'hiragana-dakuon',
  'katakana-dakuon' = 'katakana-dakuon',
}

export default data as Record<Keys, Item[]>
