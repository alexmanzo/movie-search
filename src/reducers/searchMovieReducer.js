import { SEARCH_MOVIE } from '../actions/searchMovie'
import axios from 'axios'

const initialState = {
	results: null,
	loading: false
}

export default (state = initialState, action) => {
	if (action.type === SEARCH_MOVIE) {
		const movie = action.movie
		const url = 'https://api.themoviedb.org/3/search/movie?'
		const api_key = 'api_key=8541c092938098d21b11f58a14dd114e'

		axios.get(`${url}${api_key}&query=${movie}`)
        	.then(response => {
        		response.data.results.map((movie, index) => {
					return Object.assign({}, state, {
						results: `
		        		<ul>
		        			<li>${movie.original_title}</li>
		        		</ul>
		        	`
					})
				})
			console.log(response.data.results)
			})
	}	
	return state
}
