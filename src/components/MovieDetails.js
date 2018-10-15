import React, { Component } from 'react'

export default class movieDetails extends Component {	


	render() {
	const movieData = this.props.data
	const posterPath = `https://image.tmdb.org/t/p/w1280/${movieData.poster_path}`
    const altText = `${movieData.title} poster`
		return (
			<div>
				<h1>{movieData.title}</h1>
				<h2>{movieData.tagline}</h2>
				<img src={posterPath} alt={altText}/>
				<p>Budget: ${movieData.budget.toLocaleString()}</p>
				<p>Revenue: ${movieData.revenue.toLocaleString()}</p>
				<p>Plot: {movieData.overview}</p>
				<p>Genres: {movieData.genres.map((genre, index) => (
					<span key={index} id={genre.id}>{genre.name}</span>
					))}</p>
				<p>Year released: {movieData.release_date.substring(0,4)}</p>
				<p>Runtime: {movieData.runtime} minutes</p>
			</div>
		)
	}
				
}