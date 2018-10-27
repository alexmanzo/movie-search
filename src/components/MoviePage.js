import React, { Component } from 'react'
import Loading from './Loading'
import MovieDetails from './MovieDetails'
import SimilarMovies from './SimilarMovies'
import Cast from './Cast'
import Videos from "./Videos"

export default class MoviePage extends Component {

    componentWillMount() {
        const movieId = this.props.location.pathname.slice(7)
        this.props.onMount(movieId)
    }

    componentWillReceiveProps(nextProps) {
        const currentMovieId = this.props.location.pathname.slice(7)
        const nextMovieId = nextProps.location.pathname.slice(7)
        if (nextMovieId !== currentMovieId) {
            this.props.onMount(nextMovieId)
        }
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
                <MovieDetails data={data}/>
                <Cast castData={castData}/>
                <SimilarMovies similarMovieData={similarMovieData} />
                <Videos videoData={videoData}/>
            </div>
        )
    }
}
