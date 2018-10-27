import React, { Component } from 'react'
//import { BrowserRouter as Link } from 'react-router-dom'

export default class SearchResults extends Component {

    handleClick(e, id) {
         e.preventDefault()
         this.props.history.push(`/movie/${id}`)
         
    }
    
    handleKeyPress(e, id) {
          e.preventDefault()
         if(e.key === 'Enter') {
            this.props.history.push(`/movie/${id}`)
         }
         
    }

    render() {
        const results = this.props.searchResults.map((movie, index) => (
            
            <div key ={index} tabIndex="0" role="button" onClick={ (e, id) => this.handleClick(e, movie.id)} onKeyPress={ (e, id) => this.handleKeyPress(e, movie.id)}>
                <div>{ (movie.poster_path === null) ? (<img src={'https://secure.hmepowerweb.com/Resources/Images/NoImageAvailableLarge.jpg'} alt='no poster found' />) : (<img src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={movie.original_title} />) }</div>
                <h4>{movie.original_title}</h4>
                <h5>{movie.release_date.substring(0,4)}</h5>
            </div>

        ))

        return (
        <section id="results">
            {results}
        </section>
        )
    }

}
