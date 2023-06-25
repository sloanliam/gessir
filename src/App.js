import './App.css';
import Header from './components/Header'
import Board from './components/Board'
import { useState, createContext, useEffect } from 'react';
import { defaultBoard } from './constants'
import Keyboard from './components/Keyboard';
import words from './config/words.json'

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
      <div className='game'>
        <AppContext.Provider value={{
          board, setBoard, currentColumn, setCurrentColumn, currentRow, setCurrentRow, answer, setWon
        }}>
          <Board />
          <Keyboard />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;