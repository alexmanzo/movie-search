import React, { Component } from 'react'
import Loading from './Loading'

export default class MoviePage extends Component {

    componentDidMount() {
        this.props.onMount(this.props.id)
    }

    render() {
        const data = this.props.data
        // let genres = data.genres.map((index, genre) => (
        // 		<p key={index} id={genre.id}>genre.name</p>
        // 	))
        const posterPath = `https://image.tmdb.org/t/p/w1280/${data.poster_path}`
        const altText = `${data.title} poster`

        if (!data.title) {
            return <Loading />
        }

        return (
            <div>
				<h1>{data.title}</h1>
				<h2>{data.tagline}</h2>
				<img src={posterPath} alt={altText}/>
				<p>{data.budget}</p>
				<p>{data.revenue}</p>
				<p>{data.overview}</p>
				<p>{data.genres.map((genre, index) => (
					<span key={index} id={genre.id}>{genre.name}, </span>
					))}</p>
				<p>{data.release_date}</p>
				<p>{data.runtime}</p>
			</div>
        )
    }
}