import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class movieDetails extends Component {	


	render() {

	const movieData = this.props.data
		
		return (

			<div>
				<h1>{movieData.title}</h1>
				<h2>{movieData.tagline}</h2>
				{ (movieData.poster_path === null) ? (<img src={'https://secure.hmepowerweb.com/Resources/Images/NoImageAvailableLarge.jpg'} alt='no poster found' />) : (<img src={`https://image.tmdb.org/t/p/w1280/${movieData.poster_path}`} alt={movieData.original_title} />) }
				<p>Budget: ${movieData.budget.toLocaleString()}</p>
				<p>Revenue: ${movieData.revenue.toLocaleString()}</p>
				<p>Plot: {movieData.overview}</p>
				<div>Genres: {movieData.genres.map((genre, index) => (
					<Link key={index} to={`/genre/${genre.id}-${genre.name}`}>{genre.name}</Link>
					))}</div>
				<p>Year released: {movieData.release_date.substring(0,4)}</p>
				<p>Runtime: {movieData.runtime} minutes</p>
			</div>

		)
	}
				
}