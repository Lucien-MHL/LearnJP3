import data from './data.json'

interface Item {
  word: string
  pronounce: string
  id: string
}

enum Keys {
  hiraganaSeion = 'hiragana-seion',
  katakanaSeion = 'katakana-seion',
  hiraganaDakuon = 'hiragana-dakuon',
  katakanaDakuon = 'katakana-dakuon',
}

export default data as Record<Keys, Item[]>
