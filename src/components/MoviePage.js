import React, { Component } from 'react'

export default class MoviePage extends Component {

	render() {
		const posterPath = `https://image.tmdb.org/t/p/w1280/${this.props.poster_path}`
		const altText = `${this.props.title} poster`
		return(
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.tagline}</h2>
				<img src={posterPath} alt={altText}/>
				<p>{this.props.budget}</p>
				<p>{this.props.revenue}</p>
				<p>{this.props.genres}</p>
				<p>{this.props.overview}</p>
				<p>{this.props.release_date}</p>
				<p>{this.props.runtime}</p>
			</div>
		)
	}
}
		