import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SearchForMovie from './components/SearchForMovie'
import SearchResults from './components/SearchResults'
import MoviePage from './components/MoviePage'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResults: [],
            movieId: 568,
            moviePageVisible: true
        }
    }

    getSearchResults(searchTerm) {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8541c092938098d21b11f58a14dd114e&query=${searchTerm}`)
            .then(res => {
                this.setState({
                    searchResults: res.data.results,
 					movieId: null,
 					moviePageVisible: false
                })
            })
    }

    getMovieById(id) {
    	axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8541c092938098d21b11f58a14dd114e`)
            .then(res => {
                this.setState({
                	searchResults: [],
                	movieId: res.data.id,
                	moviePageVisible: true,
                	title: res.data.original_title,
                	poster_path: res.data.poster_path,
                	backdrop_path: res.data.backdrop_path,
                	budget: res.data.budget,
                	revenue: res.data.revenue,
                	genres: res.data.genres,
                	overview: res.data.overview,
                	tagline: res.data.tagline,
                	release_date: res.data.release_date,
                	runtime: res.data.runtime
                })
            })
    }

    componentWillMount() {
    	this.getMovieById(this.state.movieId)
    }

    render() {
        const { searchResults } = this.state
        const { movieId } = this.state
        const { title } = this.state
        const { poster_path } = this.state
        const { backdrop_path } = this.state
        const { budget } = this.state
        const { revenue } = this.state
        const { overview } = this.state
        const { tagline } = this.state
        const { release_date } = this.state
        const { runtime } = this.state

        return (
          <div className="App" >
	        <Header />
	        <SearchForMovie onSearch={searchTerm => this.getSearchResults(searchTerm)} />
	        <SearchResults searchResults={searchResults} onSelectMovie={id => this.getMovieById(id)} />
	        { this.state.moviePageVisible ? <MoviePage movieId={movieId} title={title} poster_path={poster_path} backdrop_path={backdrop_path} budget={budget} revenue={revenue} overview={overview} tagline={tagline} release_date={release_date} runtime={runtime} /> : null }
	      </div>
        )
    }
}


