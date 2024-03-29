import React from 'react'
import Like from '../Like/Like'
import './Post.css'

const Post = (props) => {
    return (
        <div className='post' id={props.id}>
            <div className='post-author'>
                <p><strong>{props.copyright ? props.copyright : 'NASA'}</strong></p>
            </div>
            <object className='picture' data={props.hdurl} aria-labelledby="This is an image or video from the NASA a picture a day API" type="image/png" />
            <div className='post-row'>
                <Like />
                <button
                    id="share"
                    onClick={() => {
                        navigator.clipboard.writeText(props.hdurl)
                        alert("Link copied to clipboard")
                    }}
                >
                    <i className='fa-solid fa-share' />
                </button>
            </div>
            <h2 className='post-title'>{props.title} - {props.date}</h2>
            <p className='post-desc'>{props.explanation}</p>
        </div>
    )
}

export default Post
