import React from 'react'
import { keyRow1, keyRow2, keyRow3 } from '../constants'
import Key from './Key'
import { useContext } from 'react'
import { AppContext } from '../App'
import words from '../config/words.json'
import { getStreak, saveLoss, saveWin } from '../services/saveService'

function Keyboard() {
    const { board, setBoard, currentRow, setCurrentRow, currentColumn, setCurrentColumn, answer, setWon } = useContext(AppContext)

    const isValidWord = (word) => {
        if (words.wordList.includes(word.toLowerCase())) {
            return true
        } else {
            return false
        }
    }

    const handleClick = (key) => {
        if (key !== "ENTER" && key !== "DELETE") {
            let tempBoard = [...board]
            tempBoard[currentRow][currentColumn] = key
            setBoard(tempBoard)
        }

        if (board[currentRow].join("") === answer && key === "ENTER") {
            saveWin()
            setWon(true)

            if (parseInt(getStreak()) === 5) {
                alert("You won overall.")
            }
        } else {
            if (currentRow === 5 && currentColumn === 5 && key === "ENTER") {
                alert("You lost. The answer was " + answer)
                saveLoss()
            }
        }

        if (key !== "DELETE") {
            if (currentColumn === 5) {
                if (key === "ENTER") {
                    const guess = board[currentRow].join("")

                    if (isValidWord(guess)) {
                        setCurrentColumn(0)
                        setCurrentRow(prevState => prevState + 1)
                    } else {
                        alert("Not a valid word!")
                    }
                }
            } else {
                setCurrentColumn(prevState => prevState + 1)
            }
        } else {
            let tempBoard = [...board]
            tempBoard[currentRow][currentColumn - 1] = ''
            setBoard(tempBoard)

            if (currentColumn !== 0) {
                setCurrentColumn(prevState => prevState - 1)
            }
        }
    }

    return (
        <div className='key-container'>
            <div className='key-row1'>
                {keyRow1.split("").map((key) =>
                    <div onClick={() => handleClick(key)}>
                        <Key keyVal={key} />
                    </div>
                )}
            </div>
            <div className='key-row2'>
                {keyRow2.split("").map((key) =>
                    <div onClick={() => handleClick(key)}>
                        <Key keyVal={key} />
                    </div>
                )}
            </div>
            <div className='key-row3'>
                <div onClick={() => handleClick("ENTER")}>
                    <Key keyVal={"ENTER"} bigKey />
                </div>
                {keyRow3.split("").map((key) =>
                    <div onClick={() => handleClick(key)}>
                        <Key keyVal={key} />
                    </div>
                )}
                <div onClick={() => handleClick("DELETE")}>
                    <Key keyVal={"DELETE"} bigKey />
                </div>
            </div>
        </div>
    )
}

export default Keyboard
