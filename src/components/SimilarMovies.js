import React, { Component } from 'react'

export default class SimilarMovies extends Component {

    render() {
        const similarMovies = this.props.similarMovieData.map((movie, index) => (
                <li key={index}>{movie.original_title} ({movie.release_date.substring(0,4)})</li>
        ))

        return (    
            <ul>
                {similarMovies}
			</ul>
        )
    }
}
