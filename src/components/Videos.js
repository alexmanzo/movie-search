import React, { Component } from 'react'
import Slider from "react-slick"

export default class Videos extends Component {

    render() {
        const videos = this.props.videoData.map((video, index) => {
                const url = `https://www.youtube.com/embed/${video.key}`
                return (
                <div className="video-container" key={index}>
                    <iframe 
                    title={video.name}
                    id="ytplayer"
                    type="text/html"
                    width="640" height="360"
                    src= {url}
                    frameBorder="0">
                    </iframe>
                    <p>{video.name}</p>
                </div>
                )
        })

        const settings = {
            className: 'video-list',
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        }

        return (    
            <div className="videos">
                <h2>Trailers & Videos</h2>
                <Slider {...settings}>
                    {videos}
                </Slider>
			</div>
        )
    }
}
