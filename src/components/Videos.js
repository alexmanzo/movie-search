import React, { Component } from 'react'

export default class Videos extends Component {

    render() {
        const videos = this.props.videoData.map((video, index) => {
                const url = `https://www.youtube.com/embed/${video.key}`
                return (
                <div className="video-container" key={index}>
                    <p>{video.name}</p>
                    <iframe 
                    title={video.name}
                    id="ytplayer"
                    type="text/html"
                    width="640" height="360"
                    src= {url}
                    frameBorder="0">
                    </iframe>
                </div>
                )
        })

        return (    
            <div className="video-list">
                {videos}
			</div>
        )
    }
}
