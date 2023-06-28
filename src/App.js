import './App.css';
import Header from './components/Header'
import Board from './components/Board'
import { useState, createContext } from 'react';
import { defaultBoard } from './constants'
import Keyboard from './components/Keyboard';
import words from './config/words.json'
import WinDisplay from './components/WinDisplay';

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(defaultBoard)
  const [currentColumn, setCurrentColumn] = useState(0)
  const [currentRow, setCurrentRow] = useState(0)
  const [answer, setAnswer] = useState(words.wordList[Math.floor(Math.random() * words.wordList.length)].toUpperCase())
  const [won, setWon] = useState(false)

  return (
    <div className="App">
      <Header />
      <AppContext.Provider value={{
        board, setBoard, currentColumn, setCurrentColumn, currentRow, setCurrentRow, answer, setWon, won
      }}>
        {won === false ?
          <div className='game'>
            <div>
              <Board />
            </div>
            <div className='keyboard-container'>
              <Keyboard />
            </div>
          </div>
          :
          <WinDisplay />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
