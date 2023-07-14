import React from 'react'
import { useState, createContext } from 'react';
import { defaultBoard } from '../constants';
import words from '../config/words.json'
import Header from '../components/Header'
import Board from '../components/Board'
import WinDisplay from '../components/WinDisplay';
import Keyboard from '../components/Keyboard';

export const AppContext = createContext()

function Game() {
    const [board, setBoard] = useState(defaultBoard)
    const [currentColumn, setCurrentColumn] = useState(0)
    const [currentRow, setCurrentRow] = useState(0)
    const [answer, setAnswer] = useState(words.answers[Math.floor(Math.random() * words.answers.length)].toUpperCase())
    const [won, setWon] = useState(false)

    return (
        <div>
            <AppContext.Provider value={{
                board, setBoard, currentColumn, setCurrentColumn, currentRow, setCurrentRow, answer, setWon, won
            }}>
                {won === false ?
                    <div className='game'>
                        <div>
                            <Header />
                        </div>
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
    )
}

export default Game
