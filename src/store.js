import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import searchMovieReducer from './reducers/searchMovieReducer'

const store = createStore(
	combineReducers({
		searchMovie: searchMovieReducer
	}),
	applyMiddleware(thunk)
)


export default store
