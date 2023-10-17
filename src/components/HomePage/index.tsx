import { S } from './styles'
import { useTranslation } from 'react-i18next'
import Button from '../../elements/Button'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.Section>
        <S.Title>{t('title')}</S.Title>
        <S.StageGroup>
          <S.Stage>
            <S.Name>{t('hiragana')} :</S.Name>
            <Button text={t('seion')} />
            <Button text={t('dakuon')} />
          </S.Stage>
          <S.Stage>
            <S.Name>{t('katakana')} :</S.Name>
            <Button text={t('seion')} />
            <Button text={t('dakuon')} />
          </S.Stage>
        </S.StageGroup>
      </S.Section>
    </S.Container>
  )
}
