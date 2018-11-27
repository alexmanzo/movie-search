import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import nophoto from '../nophoto.svg'

export default class movieDetails extends Component {


    render() {

        const movieData = this.props.data

        return (

            <div className="movie">
				{ (movieData.poster_path === null) ? (<img className="movie-page-no-poster" src={nophoto} alt='no poster found' />) : (<img className="movie-page-poster" src={`https://image.tmdb.org/t/p/w1280/${movieData.poster_path}`} alt={movieData.original_title} />) }
					<div className="movie-data">
						<div className="movie-headline">
							<h1>{movieData.title} ({movieData.release_date.substring(0,4)})</h1>
							<h4>{movieData.tagline}</h4>
						</div>
						<div className="movie-details">
						{ (movieData.budget === 0) ? (<p><strong>Budget</strong><br />N/A</p>) : (<p><strong>Budget</strong><br />${movieData.budget.toLocaleString()}</p>) }
						{ (movieData.revenue === 0) ? (<p><strong>Revenue</strong><br />N/A</p>) : (<p><strong>Revenue</strong><br />${movieData.revenue.toLocaleString()}</p>) }
						{ (movieData.runtime === null) ? (<p><strong>Runtime</strong><br />N/A</p>) : (<p><strong>Runtime</strong><br />{movieData.runtime} minutes</p>)}
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