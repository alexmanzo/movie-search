import React, { Component } from 'react'
import Loading from './Loading'
import Cast from './Cast'

export default class MoviePage extends Component {

    render() {
        const data = this.props.data
        const castData = this.props.data.cast
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
				<p>Budget: ${data.budget.toLocaleString()}</p>
				<p>Revenue: ${data.revenue.toLocaleString()}</p>
				<p>Plot: {data.overview}</p>
				<p>Genres: {data.genres.map((genre, index) => (
					<span key={index} id={genre.id}>{genre.name}</span>
					))}</p>
				<p>Year released: {data.release_date.substring(0,4)}</p>
				<p>Runtime: {data.runtime} minutes</p>
				<Cast castData={castData}/>
			</div>
        )
    }
}
