import searchMovieReducer from './searchMovieReducer'
import { SEARCH_MOVIE } from '../actions/searchMovie'

describe('searchMovieReducer', () => {
	it('Should set the initial state when nothing is passed in', () => {
		const state = searchMovieReducer(undefined, {type: '__UNKNOWN'})

		expect(state.results).toEqual(null)
		expect(state.loading).toEqual(false)
	})
})

