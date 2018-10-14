import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SearchForMovie from './components/SearchForMovie'
import SearchResults from './components/SearchResults'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResults: [],
            movieId: 568
        }
    }

    getSearchResults(searchTerm) {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8541c092938098d21b11f58a14dd114e&query=${searchTerm}`)
            .then(res => {
                this.setState({
                    searchResults: res.data.results,
 					movieId: null
                })
            })
    }

    getMovieById(id) {
    	axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8541c092938098d21b11f58a14dd114e`)
            .then(res => {
                this.setState({
                	searchResults: [],
                	movidId: res.data.id,
                	original_title: res.data.title,
                	poster_path: res.data.poster_path,
                	backdrop_path: res.data.backdrop_path,
                	budget: res.data.budget,
                	revenue: res.data.revenue,
                	genres: res.data.genres,
                	overview: res.data.overview,
                	tagline: res.data.tagline,
                	release_date: res.data.release_date,
                	runtime: res.data.runtime,

                })
            })
    }

    render() {
        const { searchResults } = this.state

        return (
            <div className="App">
	        <Header />
	        <SearchForMovie onSearch={searchTerm => this.getSearchResults(searchTerm)} />
	        <SearchResults searchResults={searchResults} onSelectMovie={id => this.getMovieById(id)} />
	      </div>
        )
    }
}


