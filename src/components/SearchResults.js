import React from 'react'

export default function SearchResults(props) {

	const results = props.searchResults.map((movie, index) => (
			<li key={index}>
				{movie.original_title}
			</li>
		))

	return (
		<ul id="results">
			{results}
		</ul>
	)
}




		