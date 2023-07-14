import { useState } from 'react';
import './App.css';
import Game from './components/Game';
import { GAME_PAGE, INTRO_PAGE } from './constants';
import Instructions from './components/Instructions';

function App() {
  const [page, setPage] = useState(INTRO_PAGE)

  const mainDisplay = (page) => {
    switch(page) {
      case INTRO_PAGE:
        return (
          <Instructions onPlayClick={setPage}/>
        )
      case GAME_PAGE:
        return (
          <Game />
        )
      default:
        return (
          <Instructions />
        )
    }
  }

  return (
    <div className="App">
      {mainDisplay(page)}
    </div>
  );
}

export default App;
