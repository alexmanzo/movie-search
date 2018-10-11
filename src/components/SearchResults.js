import React from 'react'
import { connect } from 'react-redux'

export function SearchResults(props) {
	return (
		<ul>
			<li>placeholder</li>
		</ul>
	)
}

const mapStateToProps = state => ({
    results: state.searchMovie.results
})

export default connect(mapStateToProps)(SearchResults)
		