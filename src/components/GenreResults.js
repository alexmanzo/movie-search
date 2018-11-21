import React, { Component } from 'react'
import Loading from './Loading'
import './SearchResults.css'
import { Link } from 'react-router-dom'
import nophoto from '../nophoto.svg'

export default class GenreResults extends Component {

    // Pulls genreID from Router path and calls getMoviesByGenre() in App.js
    componentDidMount() {

        const path = this.props.location.pathname
        const genreId = path.slice(7, path.indexOf('-'))
        this.props.onMount(genreId)

    }

    // If navigating from movie page to move page, allows component to reset.
    componentDidUpdate(prevProps) {

        const currentPath = this.props.location.pathname
        const prevPath = prevProps.location.pathname
        const prevGenreId = prevPath.slice(7, prevPath.indexOf('-'))
        const currentGenreId = currentPath.slice(7, currentPath.indexOf('-'))

        if (prevGenreId !== currentGenreId) {

            this.props.onMount(currentGenreId)  
                     
        }
    }

    render() {

        // Shows loading while AJAX calls complete
        if (this.props.numberOfResults === 0) {

            return <Loading />

        }

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
            <p>{ `Your search returned ${ this.props.numberOfResults } results.` }</p>
            {results}
        </section>
        )
    }

}