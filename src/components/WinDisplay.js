import React, { useContext } from 'react'
import { AppContext } from './Game'
import { getStreak } from '../services/saveService'

function WinDisplay() {
    const {answer} = useContext(AppContext)

    return (
        <div className='win-container'>
            <h1>YOU WIN</h1>
            <h3>The answer was {answer}</h3>
            <h3>Your current streak is {getStreak()}</h3>
        </div>
    )
}

export default WinDisplay
