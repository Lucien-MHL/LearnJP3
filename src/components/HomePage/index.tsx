import { S } from './styles'
import { useTranslation } from 'react-i18next'
import Button from '../../elements/Button'
import useStage from './useStage'

export default function HomePage() {
  const { t } = useTranslation()
  const { list } = useStage()

  return (
    <S.HomeSection>
      <S.Title>{t('title')}</S.Title>
      <S.StageGroup>
        {list.map((e, i) => (
          <S.Stage key={i}>
            <S.Name>{t(e.name)} :</S.Name>
            {e.stage.map(item => (
              <Button key={item.dataKey}>{t(item.text)}</Button>
            ))}
          </S.Stage>
        ))}
      </S.StageGroup>
    </S.HomeSection>
  )
}
