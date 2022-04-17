import React, { useState } from 'react'
import './Like.css'

const Like = () => {
    const [like, setLike] = useState(false)

    return (
        <button id="like" onClick={() => setLike((prevLike) => !prevLike)}>
            <i className={like ? 'fas fa-heart' : 'far fa-heart'}/>
        </button>
    )
}

export default Like