import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '../../redux/hooks'
import Button from '../../elements/Button'
import useStage from './useStage'
import { S } from './styles'
import { changePage, PageName } from '../../redux/reducers/pageSlice'

type OnClick = (dataKey: string) => void

export default function HomePage() {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const { list } = useStage()
  const buttonRef = useRef<HTMLButtonElement>(null)

  const onClick: OnClick = dataKey => {
    buttonRef.current?.classList.toggle('active')
    setTimeout(() => {
      dispatch(changePage(PageName.game))
      buttonRef.current?.classList.toggle('active')
    }, 750)
  }

  return (
    <S.HomeSection>
      <S.AvoidControlCover className='cover' />
      <S.Line className='line' />
      <S.Title>{t('title')}</S.Title>
      <S.StageGroup>
        {list.map((e, i) => (
          <S.Stage key={i}>
            <S.Name>{t(e.name)}</S.Name>
            {e.stage.map(item => (
              <Button
                key={item.dataKey}
                onClick={() => onClick(item.dataKey)}
                ref={buttonRef}
              >
                {t(item.text)}
              </Button>
            ))}
          </S.Stage>
        ))}
      </S.StageGroup>
    </S.HomeSection>
  )
}
