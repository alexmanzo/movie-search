import React, { Component } from 'react'

export default class MoviePlot extends Component {	


	render() {

	const movieData = this.props.data
		
		return (
			<div className="movie-plot">
				<p><strong>Plot</strong><br />{movieData.overview}</p>
			</div>

		)
	}
				
}