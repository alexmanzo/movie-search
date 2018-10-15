import React, { Component } from 'react'

export default class Videos extends Component {

    render() {
        const videos = this.props.videoData.map((video, index) => (
                <div key={index}>{video.name} ({video.key})</div>
        ))

        return (    
            <ul>
                {videos}
			</ul>
        )
    }
}
