import React from 'react'
import axios from 'axios'
import APIKEY from './../../config'
import Loader from '../Loader/Loader'
import Message from './../Message/Message'
import Post from '../Post/Post'
import './Feed.css'

export default class Feed extends React.Component {
    state = {
        pictureInfo: [],
        loading: true
    }

    componentDidMount() {
        axios(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`)
            .then(res => {
                const pictureInfo = res.data
                const newState = { ...this.state }
                newState.pictureInfo = pictureInfo
                newState.loading = false
                this.setState(newState)
            })
            .catch((err) => {
                <Message>{err}</Message>
            })
    }

    render() {
        const info = this.state.pictureInfo

        return (
            <>
                <div id='company'>
                    <h1>Spacestagram</h1>
                    <p>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</p>
                </div>
                <div className='feed'>
                    {
                        this.state.loading ?

                            <Loader /> :

                            <Post
                                copyright={info.copyright}
                                date={info.date}
                                explanation={info.explanation}
                                hdurl={info.url}
                                id={info.date}
                                title={info.title}
                            />
                    }
                </div>
            </>
        )
    }
}
