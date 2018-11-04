import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CastProfile from './components/CastProfile'
import GenreResults from './components/GenreResults'
import Header from './components/Header'
import MoviePage from './components/MoviePage'
import SearchError from './components/SearchError'
import SearchResults from './components/SearchResults'

export default class App extends Component {
    constructor(props) {

        super(props)

        this.state = {
            numberOfResults: 0,
            searchResults: []
        }
    }

    getSearchResults(searchTerm) {
        // Reset state before AJAX call. Prevents page loading with what was in component previously before displaying new content.
        this.setState({
            numberOfResults: 0,
            searchResults: []
        })

        // AJAX call searching via movie title.
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8541c092938098d21b11f58a14dd114e&language=en&query=${searchTerm}`)
            .then(res => {
                this.setState({
                    numberOfResults: res.data.total_results,
                    searchResults: res.data.results,
                })
            })
    }

    getMoviesByGenre(genreId) {
        
        // Reset state before AJAX call. Prevents page loading with what was in component previously before displaying new content.
        this.setState({
            numberOfResults: 0
        })

        // AJAX searching movies by genre. Returns movies with >5000 votes on TMDb sorted by vote average 
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=8541c092938098d21b11f58a14dd114e&sort_by=vote_average.desc&include_adult=false&include_video=false&language=en-US&page=1&vote_count.gte=5000&with_genres=${genreId}`)
        .then(res => {
            this.setState({
                numberOfResults: res.data.total_results,
                searchResults: res.data.results,
            })
        })
    }

    getCastProfile(castId) {

        // Reset state before AJAX call. Prevents page loading with what was in component previously before displaying new content.
        this.setState({
            castName: null
        })

        // AJAX searching by cast ID. Returns movie they appeared in sorted by release date (newest => oldset)
        function getFilmography() {
            return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=8541c092938098d21b11f58a14dd114e&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_cast=${castId}&with_original_language=en`)
        }

        // AJAX searching for bio by cast ID.
        function getBio() {
            return axios.get(`https://api.themoviedb.org/3/person/${castId}?api_key=8541c092938098d21b11f58a14dd114e&language=en-US`)
        }

        axios.all([getFilmography(), getBio()])
            .then(axios.spread((filmography, bio) => {
                this.setState({
                    numberOfResults: filmography.data.total_results,
                    filmography: filmography.data.results,
                    castId: bio.data.id,
                    birthday: bio.data.birthday,
                    deathday: bio.data.deathday,
                    castName: bio.data.name,
                    bio: bio.data.biography,
                    castPhoto_path: bio.data.profile_path
                })
            }))
    }

    // Retrives movie infomation, cast, videos, and similar movies.
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

        // Reset state before AJAX call. Prevents page loading with what was in component previously before displaying new content.
        this.setState({
            title: null
        })

        axios.all([getMovieDetails(), getMovieCast(), getVideos(), getSimilarMovies()])
            .then(axios.spread( (details, cast, videos, similarMovies) => {
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
               document.body.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${details.data.backdrop_path}` 
            }))      
    }


    render() {
        const { searchResults, numberOfResults, filmography } = this.state
        return (
            <Router basename="/movie-search">
            <main className="App" >
                <Route path="/" render={ props => <Header onSearch={searchTerm => this.getSearchResults(searchTerm)} {...props}/> } />
                <Route exact path="/results" render={ props => <SearchResults searchResults={searchResults} numberOfResults={numberOfResults} onSelectMovie={id => this.getMovieById(id)} {...props}/> } />
                <Route exact path="/searcherror" component={ SearchError } />
                <Route exact path="/genre/:id-:name" render={ props => <GenreResults searchResults={ searchResults } numberOfResults={ numberOfResults } onMount={ genreId => this.getMoviesByGenre(genreId) } {...props} /> } />
                <Route exact path="/movie/:id" render={ props => <MoviePage data={ this.state } onMount={ id => this.getMovieById(id)} {...props}/> } />
                <Route exact path="/cast/:id-:name" render={ props => <CastProfile filmography={ filmography } bioData={ this.state } onMount={ id => this.getCastProfile(id) } {...props}/> } />
            </main>
            </Router>
        )
    }
}