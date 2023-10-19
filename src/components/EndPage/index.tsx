import { useTranslation } from 'react-i18next'
import CorrectAndFail from '../../elements/CorrectAndFail'
import Button from '../../elements/Button'
import { S } from './styles'

export default function EndPage() {
  const { t } = useTranslation()

  return (
    <S.EndSection>
      <CorrectAndFail
        placement={{
          left: 'calc(50% - 79px)',
        }}
      />
      <S.ButtonGroup>
        <Button>{t('retry')}</Button>
        <Button>{t('back-to-home')}</Button>
      </S.ButtonGroup>
    </S.EndSection>
  )
}
