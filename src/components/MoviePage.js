import React, { Component } from 'react'
import Loading from './Loading'
import MovieDetails from './MovieDetails'
import MoviePlot from './MoviePlot'
import SimilarMovies from './SimilarMovies'
import Cast from './Cast'
import Videos from './Videos'
import './MoviePage.css'

export default class MoviePage extends Component {

    // Pulls movieID from Router path and calls getCastProfile() in App.js
    componentDidMount() {
        const path = this.props.location.pathname
        const movieId = path.slice(7)
        this.props.onMount(movieId)

    }

    // If navigating from movie page to movie page, allows component to reset.
    componentDidUpdate(prevProps) {  
        const currentPath = this.props.location.pathname
        const prevPath = prevProps.location.pathname
        const currentMovieId = currentPath.slice(7)
        const prevMovieId = prevPath.slice(7)

        if (prevMovieId !== currentMovieId) {

            this.props.onMount(currentMovieId)

        }

        // Scrolls back to top of page, otherwise components re-renders in place.
        window.scrollTo(0, 0)
    }

    render() {
        const data = this.props.data
        const castData = this.props.data.cast
        const similarMovieData = this.props.data.similarMovies
        const videoData = this.props.data.videos

        if (!data.title) {

            return <Loading />

        }

        return (
            <div className="movie-container">
                <MovieDetails data={ data } />
                <Cast castData={ castData }/>
                <SimilarMovies similarMovieData={ similarMovieData } />
                <Videos videoData={ videoData }/>
            </div>
        )
    }
}
