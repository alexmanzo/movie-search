import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import nophoto from '../nophoto.svg'

export default class SimilarMovies extends Component {

    render() {
        const similarMovies = this.props.similarMovieData.map((movie, index) => (
        <div key={index} className="similar-movie-container">
            <Link to={`/movie/${movie.id}`}>
                { (movie.poster_path === null) ? (<img className="similar-movie-nophoto" src={nophoto} alt='no profile found' />) : (<img className="similar-movie-photo" src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={movie.original_title} />) }
                <p className="similar-movie-title">{movie.original_title} ({movie.release_date.substring(0,4)})</p>
            </Link> 
        </div>
        ))

        const settings = {
            className: 'slider-list',
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 1350,
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
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                }
            ]
        };

        return (
        <div className="similar-movies">  
        <h2>Similar Movies</h2>  
            <Slider {...settings}>
                {similarMovies}
            </Slider>
        </div>
        )
    }
}
