import React from 'react'

function Key({ keyVal }) {
    return (
        <div className='key'>
            <div style={{ paddingTop: 3 }}>
                {keyVal}
            </div>
        </div>
    )
}

export default Key
