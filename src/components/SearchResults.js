import React, { Component } from 'react'

export default class SearchResults extends Component {

	handleClick(e, id) {
		e.preventDefault()

        if (this.props.onSelectMovie) {
            this.props.onSelectMovie(id)
        }
    }

    render() {
        const results = this.props.searchResults.map((movie, index) => (
            <li key={index}>
				<button onClick={(e, id) => this.handleClick(e, movie.id)}>{movie.original_title}</button>
			</li>
        ))

        console.log(this.props)
        return (
        <ul id="results">
			{results}
		</ul>
        )
    }

}

