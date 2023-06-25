import React from 'react'
import { keyRow1, keyRow2, keyRow3 } from '../constants'
import Key from './Key'
import { useContext } from 'react'
import { AppContext } from '../App'

function Keyboard() {
    const { board, setBoard, currentRow, setCurrentRow, currentColumn, setCurrentColumn, answer } = useContext(AppContext)

    const handleClick = (key) => {
        let tempBoard = [...board]
        tempBoard[currentRow][currentColumn] = key
        setBoard(tempBoard)

        if(board[currentRow].join("") === answer) {
            alert("YOU WON")
        }

        if (currentColumn === 4) {
            setCurrentColumn(0)
            setCurrentRow(prevState => prevState + 1)
        } else {
            setCurrentColumn(prevState => prevState + 1)
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
                {keyRow3.split("").map((key) =>
                    <div onClick={() => handleClick(key)}>
                        <Key keyVal={key} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Keyboard
