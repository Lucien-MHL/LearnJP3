import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import { S, Props } from './styles'

export default function CorrectAndFail({ placement }: Props) {
  const { t } = useTranslation()
  const theme = useTheme()
  const cfList: { color: string; title: string; number: number }[] = [
    {
      color: theme.green,
      title: t('correct'),
      number: 23,
    },
    {
      color: theme.red,
      title: t('fail'),
      number: 12,
    },
  ]

  return (
    <S.Section $p={placement}>
      {cfList.map((item, i) => (
        <S.Item key={i}>
          <S.Text>{item.title}</S.Text>
          <S.Text $color={item.color}>{item.number}</S.Text>
        </S.Item>
      ))}
    </S.Section>
  )
}
