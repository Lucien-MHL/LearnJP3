import { useAppSelector } from './redux/hooks'
import { selectPageByKey, PageName } from './redux/reducers/pageSlice'
import HomePage from './components/HomePage'
import GamePage from './components/GamePage'
import EndPage from './components/EndPage'

function App() {
  const currPage = useAppSelector(selectPageByKey('currentPage'))

  switch (currPage) {
    case PageName.game:
      return <GamePage />
    case PageName.end:
      return <EndPage />
    default:
      return <HomePage />
  }
}

export default App
