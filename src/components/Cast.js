import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import nophoto from '../nophoto.svg'

export default class Cast extends Component {

    render() {
        const cast = this.props.castData.map((cast, index) => (
            <div key={index} className="cast-container">
            <Link to={`/cast/${cast.id}-${cast.name}`}>
                { (cast.profile_path === null) ? (<img className="cast-nophoto" src={nophoto} alt='no profile found' />) : (<img className="cast-photo" src={`https://image.tmdb.org/t/p/w1280/${cast.profile_path}`} alt={cast.name} />) }
                <p className="actor">{cast.name}</p>
                <p className="character">{cast.character}</p>
            </Link> 
        </div>
        ))


        const settings = {
            className: 'cast-list',
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 1550,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },

                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                }
            ]
        };


        return (
            <Slider {...settings}>
             {cast}
            </Slider>
        )
    }
}