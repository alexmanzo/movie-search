import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GenreResults from './components/GenreResults'
import Header from './components/Header'
import MoviePage from './components/MoviePage'
import SearchError from './components/SearchError'
import SearchResults from './components/SearchResults'

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

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8541c092938098d21b11f58a14dd114e&language=en&query=${searchTerm}`)
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

    getMoviesByGenre(genreId) {
        
        this.setState({
            numberOfResults: 0
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=8541c092938098d21b11f58a14dd114e&sort_by=vote_average.desc&include_adult=false&include_video=false&language=en-US&page=1&vote_count.gte=5000&with_genres=${genreId}`)
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
            return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8541c092938098d21b11f58a14dd114e&language=en-US`)
        }

        function getMovieCast() {
            return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=8541c092938098d21b11f58a14dd114e&language=en-US`)

        }

        function getVideos() {
            return axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=8541c092938098d21b11f58a14dd114e&language=en-US`)

        }

        function getSimilarMovies() {
            return axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=8541c092938098d21b11f58a14dd114e&language=en-US`)

        }

        this.setState({
            title: null
        })

        axios.all([getMovieDetails(), getMovieCast(), getVideos(), getSimilarMovies()])
            .then(axios.spread((details, cast, videos, similarMovies) => {
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
                    similarMovies: similarMovies.data.results
                })
            }))      
    }


    render() {
        const { searchResults, numberOfResults } = this.state
        return (
            <Router>
            <main className="App" >
                <Route path="/movie-search" render={ props => <Header onSearch={searchTerm => this.getSearchResults(searchTerm)} {...props}/> } />
                <Route exact path="/movie-search/results" render={ props => <SearchResults searchResults={searchResults} numberOfResults={numberOfResults} onSelectMovie={id => this.getMovieById(id)} {...props}/> } />
                <Route exact path="/movie-search/searcherror" component={ SearchError } />
                <Route exact path="/movie-search/genre/:id-:name" render={ props => <GenreResults searchResults={searchResults} numberOfResults={numberOfResults} onMount={genreId => this.getMoviesByGenre(genreId)} {...props} /> } />
                <Route exact path="/movie-search/movie/:id" render={ props => <MoviePage data={this.state} id={this.state.movieId} onMount={id => this.getMovieById(id)} {...props}/> } />
            </main>
            </Router>
        )
    }
}