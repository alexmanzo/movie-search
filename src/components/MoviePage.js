import React, { Component } from 'react'
import Loading from './Loading'
import MovieDetails from './MovieDetails'
import SimilarMovies from './SimilarMovies'
import Cast from './Cast'
import Videos from "./Videos"

export default class MoviePage extends Component {

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