import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchError from './components/SearchError'
import Header from './components/Header'
import SearchResults from './components/SearchResults'
import MoviePage from './components/MoviePage'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResults: []
        }
    }

    getSearchResults(searchTerm) {
    	this.setState({
    		numberOfResults: 0,
    		searcherror: []
    	})

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8541c092938098d21b11f58a14dd114e&query=${searchTerm}`)
            .then(res => {
                this.setState({
                	numberOfResults: res.data.total_results,
                    searchResults: res.data.results,
                    movieId: null,
                    title: null,
                    poster_path: null,
                    backdrop_path: null,
                    budget: null,
                    revenue: null,
                    genres: null,
                    overview: null,
                    tagline: null,
                    release_date: null,
                    runtime: null,
                    cast: null,
                    videos: null,
                    recommendations: null,
                    similarMovies: null
                })
            })
    }


    getMovieById(id) {
        function getMovieDetails() {
            return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8541c092938098d21b11f58a14dd114e`)
        }

        function getMovieCast() {
            return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=8541c092938098d21b11f58a14dd114e`)

        }

        function getVideos() {
            return axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=8541c092938098d21b11f58a14dd114e`)

        }

        function getRecommendations() {
            return axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=8541c092938098d21b11f58a14dd114e`)
        }

        function getSimilarMovies() {
            return axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=8541c092938098d21b11f58a14dd114e`)

        }

        axios.all([getMovieDetails(), getMovieCast(), getVideos(), getRecommendations(), getSimilarMovies()])
            .then(axios.spread((details, cast, videos, recommendations, similarMovies) => {
                this.setState({
                    searchResults: [],
                    movieId: details.data.id,
                    title: details.data.original_title,
                    poster_path: details.data.poster_path,
                    backdrop_path: details.data.backdrop_path,
                    budget: details.data.budget,
                    revenue: details.data.revenue,
                    genres: details.data.genres,
                    overview: details.data.overview,
                    tagline: details.data.tagline,
                    release_date: details.data.release_date,
                    runtime: details.data.runtime,
                    cast: cast.data.cast,
                    videos: videos.data.results,
                    recommendations: recommendations.data.results,
                    similarMovies: similarMovies.data.results
                })
            }))
    }


    render() {
        const { searchResults, numberOfResults } = this.state
        return (
            <Router>
            <main className="App" >
		        <Route path="/" render={ props => <Header onSearch={searchTerm => this.getSearchResults(searchTerm)} {...props}/> } />
		        <Route exact path="/results" render={ props => <SearchResults searchResults={searchResults} numberOfResults={numberOfResults} onSelectMovie={id => this.getMovieById(id)} {...props}/> } />
		        <Route exact path="/searcherror" component={ SearchError } />
		        <Route exact path="/movie/:id" render={ props => <MoviePage data={this.state} id={this.state.movieId} onMount={id => this.getMovieById(id)} {...props}/> } />
	      	</main>
	      	</Router>
        )
    }
}


