import data from '../../assets/data'

interface IItem {
  text: string
  dataKey: string
}

interface IGroup {
  name: string
  stage: IItem[]
}

function useStage() {
  const keys = Object.keys(data)
  const character: string[] = keys
    .map(v => v.split('-')[0])
    .filter((v, i, a) => a.indexOf(v) === i)
  const stage: IItem[] = keys.map(key => {
    const [_, last] = key.split('-')
    return { text: last, dataKey: key }
  })

  const list: IGroup[] = character.map(char => {
    return {
      name: char,
      stage: stage.filter(({ dataKey }) => dataKey.includes(char)),
    }
  })

  return { list }
}

export default useStage
