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
  const [won, setWon] = useState(false)
  const [answer, setAnswer] = (words.answers[Math.floor(Math.random() * words.answers.length)].toUpperCase())

  const mainDisplay = () => {
    if (won) {
      return (
        <WinDisplay />
      )
    } else {
      return (
        <div className='game'>
          <div>
            <Board />
          </div>
          <div className='keyboard-container'>
            <Keyboard />
          </div>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <Header />
      <AppContext.Provider value={{
        board, setBoard, currentColumn, setCurrentColumn, currentRow, setCurrentRow, answer, setWon, won
      }}>
        {mainDisplay()}
      </AppContext.Provider>
    </div>
  );
}

export default App;
