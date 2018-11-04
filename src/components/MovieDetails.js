import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class movieDetails extends Component {


    render() {

        const movieData = this.props.data

        return (

            <div className="movie">
				{ (movieData.poster_path === null) ? (<img className="movie-page-poster" src={'https://secure.hmepowerweb.com/Resources/Images/NoImageAvailableLarge.jpg'} alt='no poster found' />) : (<img className="movie-page-poster" src={`https://image.tmdb.org/t/p/w1280/${movieData.poster_path}`} alt={movieData.original_title} />) }
					<div className="movie-data">
						<div className="movie-headline">
							<h1>{movieData.title} ({movieData.release_date.substring(0,4)})</h1>
							<h4>{movieData.tagline}</h4>
						</div>
						<div className="movie-details">
						<p><strong>Budget</strong><br />${movieData.budget.toLocaleString()}</p>
						<p><strong>Revenue</strong><br />${movieData.revenue.toLocaleString()}</p>
						<p><strong>Runtime</strong><br />{movieData.runtime} minutes</p>
						<div className="genres"><p><strong>Genres</strong><br />
								{movieData.genres.map((genre, index) => (
								<span key={index} className="genre-link"><Link to={`/genre/${genre.id}-${genre.name}`}>{genre.name}</Link> </span>   
								))}
							</p></div>
						</div>
						<div className="movie-plot">
							<p><strong>Plot</strong><br />{movieData.overview}</p>
						</div>
				</div>	
			</div>

        )
    }

}