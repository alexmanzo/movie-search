import React, { Component } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom'

export default class GenreResults extends Component {


    componentDidMount() {
        const genreId = this.props.location.pathname.slice(7, this.props.location.pathname.indexOf('-'))
        this.props.onMount(genreId)
    }

    componentDidUpdate(prevProps) {
        const prevGenreId = prevProps.location.pathname.slice(7, this.props.location.pathname.indexOf('-'))
        const currentGenreId = this.props.location.pathname.slice(7, this.props.location.pathname.indexOf('-'))
        if (prevGenreId !== currentGenreId) {
            this.props.onMount(currentGenreId)
        }
    }

    render() {

        if (this.props.numberOfResults === 0) {
            return <Loading />
        }

        const results = this.props.searchResults.map((movie, index) => (
            <Link to={`/movie/${movie.id}`} key ={index}>
                <div>
                    <div>{ (movie.poster_path === null) ? (<img src={'https://secure.hmepowerweb.com/Resources/Images/NoImageAvailableLarge.jpg'} alt='no poster found' />) : (<img src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={movie.original_title} />) }</div>
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