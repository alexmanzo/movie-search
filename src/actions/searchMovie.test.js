import {
    SEARCH_MOVIE,
    searchMovie
} from './searchMovie'

describe('searchMovie', () => {
    it('Should return the action', () => {
        const movie = 'Interstellar'
        const action = searchMovie(movie)
        expect(action.type).toEqual(SEARCH_MOVIE)
        expect(action.movie).toEqual(movie)
    })
})

