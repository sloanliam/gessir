import React from 'react'
import { GAME_PAGE } from '../constants'

function Instructions({ onPlayClick }) {
    return (
        <div className='instruction-container'>
            <div className='instruction-header'>
                How to play Gessir:
            </div>
            <div className='instruction-text'>
                Gessir plays similarly to other word games.
                <br />
                <br />
                However, in order to win, you must complete 3 puzzles in a row.
            </div>
            <div className='instruction-button' onClick={() => onPlayClick(GAME_PAGE)}>
                <div className='instruction-button-text'>
                    Play
                </div>
            </div>
        </div>
    )
}

export default Instructions
