import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

export default class SearchResults extends Component {

    // handleClick(e, id) {
    //     e.preventDefault()

    //     this.props.history.push(`/movie/${id}`)
    // }
    //key={ index } onClick={ (e, id) => this.handleClick(e, movie.id) }

    render() {
        const results = this.props.searchResults.map((movie, index) => (
            
            <div key ={index}>

                <img src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={movie.original_title} />
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
