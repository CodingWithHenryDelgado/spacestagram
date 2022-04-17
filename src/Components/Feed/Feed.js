import React from 'react'
import axios from 'axios'
import APIKEY from './../../API';
import './Feed.css'
import Like from '../Like/Like';

export default class Feed extends React.Component {
    state = {
        pictureInfo: {}
    }

    componentDidMount() {
        axios(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`)
        .then(res => {
            const pictureInfo = res.data
            console.log(pictureInfo)
            this.setState({pictureInfo})
        })
        .catch((err) => {
            console.error(err)
        })
    }

    render() {
        return (
            <>
                <div id='company'>
                    <h1>Spacestagram</h1>
                    <p>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</p>
                </div>
                <div className='feed'>
                    <div className='post'>
                        <div className='post-author'>
                            <p><strong>{this.state.pictureInfo.copyright}</strong></p>
                        </div>
                        <img className='picture' src={this.state.pictureInfo.hdurl} alt={this.state.pictureInfo.title}/>
                        <Like />
                        <h2 className='post-title'>{this.state.pictureInfo.title} - {this.state.pictureInfo.date}</h2>
                        <p className='post-desc'>{this.state.pictureInfo.explanation}</p>
                    </div>
                </div>
            </>
        )
    }
}
