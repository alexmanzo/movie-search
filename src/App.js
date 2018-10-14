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
                    moviePageVisible: true,
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

    componentDidMount() {
        this.getMovieById(this.state.movieId)
    }

    render() {
        const { searchResults } = this.state

        return (
            <div className="App" >
	        <Header />
	        <SearchForMovie onSearch={searchTerm => this.getSearchResults(searchTerm)} />
	        <SearchResults searchResults={searchResults} onSelectMovie={id => this.getMovieById(id)} />
	        { this.state.moviePageVisible ? <MoviePage data={this.state} id={this.state.movieId} onMount={id => this.getMovieById(id)}/> : null }
	      </div>
        )
    }
}