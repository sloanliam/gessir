import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

function Letter({ row, column }) {
  const { board, answer, currentRow, currentColumn } = useContext(AppContext)
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    if (board[row][column] != '') {
      setFilled(true)
    } else {
      setFilled(false)
    }
  }, [board[row][column]])

  const letterDisplay = () => {
    if (row < currentRow) {
      if (board[row][column] === answer[column]) {
        return (
          <div className='letter' id={'correct'}>
            <div className='key-text'>{board[row][column]}</div>
          </div>
        )
      } else if (answer.includes(board[row][column])) {
        return (
          <div className='letter' id={'almost'}>
            <div className='key-text'>{board[row][column]}</div>
          </div>
        )
      } else {
        return (
          <div className='letter' id={'incorrect'}>
            <div className='key-text'>{board[row][column]}</div>
          </div>
        )
      }
    } else {
      return (
        <div className='letter' id={row < currentRow ? 'correct' : null}>
          <div className='key-text'>
            {filled ?
            <div className={filled ? 'change-container' : null}>
              {board[row][column]}
            </div>
            :
            <></>}
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      {letterDisplay()}
    </div>
  )
}

export default Letter
