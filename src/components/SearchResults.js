import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SearchResults.css'
import nophoto from '../nophoto.svg'

export default class SearchResults extends Component {

    render() {
        const results = this.props.searchResults.map((movie, index) => (
            <div className="movie-card" key={index}>
                <Link to={`/movie/${movie.id}`}>
                { (movie.poster_path === null) ? (<img className="results-no-poster" src={nophoto} alt='no poster found' />) : (<img className="results-poster" src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={movie.original_title} />) }
                <div className="movie-search-info">
                    <h1>{movie.original_title} ({movie.release_date.substring(0,4)})</h1>
                    <p>{movie.overview}</p>
                </div>
                </Link>
            </div>
        ))

        return (
        <section id="results" className="results">
            <div className="results-num">
                <p>{ `Your search returned ${ this.props.numberOfResults } results.` }</p>
            </div>
            {results}
        </section>
        )
    }

}
