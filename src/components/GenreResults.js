import React, { Component } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom'

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

            <Link to={`/movie/${movie.id}`} key ={index}>
                <div>
                    { (movie.poster_path === null) ? (<img src={'https://secure.hmepowerweb.com/Resources/Images/NoImageAvailableLarge.jpg'} alt='no poster found' />) : (<img src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={movie.original_title} />) }
                    <h4>{movie.original_title}</h4>
                    <h5>{movie.release_date.substring(0,4)}</h5>
                </div>
            </Link>

        ))

        return (
        <section id="results">
            <p>{ `Your search returned ${ this.props.numberOfResults } results.` }</p>
            {results}
        </section>
        )
    }

}