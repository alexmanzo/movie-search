import React, { Component } from 'react'
import Loading from './Loading'
import MovieDetails from './MovieDetails'
import SimilarMovies from './SimilarMovies'
import Cast from './Cast'
import Videos from "./Videos"

export default class MoviePage extends Component {

    componentDidMount() {
        const movieId = this.props.location.pathname.slice(7)
        this.props.onMount(movieId)
    }


    componentDidUpdate(prevProps) {  
        const currentMovieId = this.props.location.pathname.slice(7)
        const prevMovieId = prevProps.location.pathname.slice(7)
        if (prevMovieId !== currentMovieId) {
            this.props.onMount(currentMovieId)
        }
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
            <div>
                <MovieDetails data={data} />
                <Cast castData={castData}/>
                <SimilarMovies similarMovieData={similarMovieData} />
                <Videos videoData={videoData}/>
            </div>
        )
    }
}
