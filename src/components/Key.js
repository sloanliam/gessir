import React from 'react'

function Key({ keyVal, bigKey }) {
    return (
        <div className={bigKey ? 'bigkey' : 'key'}>
            <div style={{ paddingTop: bigKey ? 16 : 9 }} >
                {keyVal}
            </div>
        </div>
    )
}

export default Key
