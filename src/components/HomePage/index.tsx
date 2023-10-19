import { S } from './styles'
import { useTranslation } from 'react-i18next'
import Button from '../../elements/Button'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <S.HomeSection>
      <S.Title>{t('title')}</S.Title>
      <S.StageGroup>
        <S.Stage>
          <S.Name>{t('hiragana')} :</S.Name>
          <Button>{t('seion')}</Button>
          <Button>{t('dakuon')}</Button>
        </S.Stage>
        <S.Stage>
          <S.Name>{t('katakana')} :</S.Name>
          <Button>{t('seion')}</Button>
          <Button>{t('dakuon')}</Button>
        </S.Stage>
      </S.StageGroup>
    </S.HomeSection>
  )
}
