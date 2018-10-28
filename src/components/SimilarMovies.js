import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SimilarMovies extends Component {

    render() {
        const similarMovies = this.props.similarMovieData.map((movie, index) => (
                <Link to={`/movie-search/movie/${movie.id}`} key={index}><li>{movie.original_title} ({movie.release_date.substring(0,4)})</li></Link>
        ))

        return (    
            <ul>
                {similarMovies}
			</ul>
        )
    }
}
