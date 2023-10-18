import HomePage from './components/HomePage'
import GamePage from './components/GamePage'
import EndPage from './components/EndPage'

function App() {
  // TODO: 建置畫面用邏輯，等不需要時即可刪除。
  const page = {
    home: 'home',
    game: 'game',
    end: 'end',
  }

  switch (page.game) {
    case page.home:
      return <HomePage />
    case page.game:
      return <GamePage />
    case page.end:
      return <EndPage />
    default:
      break
  }
}

export default App
