import React, { useEffect, useState } from 'react'
import './Like.css'

const Like = () => {
    const [like, setLike] = useState(
        JSON.parse(localStorage.getItem('is-liked')) || false
    )

    useEffect(() => {
        localStorage.setItem('is-liked', JSON.stringify(like))
    }, ['is-liked', like]
    )

    return (
        <button id="like" onClick={() => setLike((prevLike) => !prevLike)}>
            <i 
                className={like ? 'fas fa-heart fa-bounce' : 'far fa-heart'}
            />
        </button>
    )
}

export default Like