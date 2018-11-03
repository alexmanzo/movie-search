import React, { Component } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import './SearchResults.css'

export default class SearchResults extends Component {

    render() {

        if (this.props.numberOfResults === 0) {
            return <Loading />
        }
        
        const results = this.props.searchResults.map((movie, index) => (
            <div className="movie-card" key={index}>
                <Link to={`/movie/${movie.id}`}>
                { (movie.poster_path === null) ? (<img className="results-no-poster" src={'https://secure.hmepowerweb.com/Resources/Images/NoImageAvailableLarge.jpg'} alt='no poster found' />) : (<img className="results-poster" src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={movie.original_title} />) }
                <div className="movie-search-info">
                    <h1>{movie.original_title} ({movie.release_date.substring(0,4)})</h1>
                    <p>{movie.overview}</p>
                </div>
                </Link>
            </div>
        ))

        return (
        <section id="results">
            <p>{ `Your search returned ${ this.props.numberOfResults } results.` }</p>
            {results}
        </section>
        )
    }

}
