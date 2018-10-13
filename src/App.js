import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SearchForMovie from './components/SearchForMovie'
import SearchResults from './components/SearchResults'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResults: []
        }
    }

    getSearchResults(searchTerm) {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8541c092938098d21b11f58a14dd114e&query=${searchTerm}`)
            .then(res => {
                this.setState({
                    searchResults: res.data.results
                })
            })
    }


    render() {
        const { searchResults } = this.state

        return (
            <div className="App">
	        <Header />
	        <SearchForMovie onSearch={searchTerm => this.getSearchResults(searchTerm)} />
	        <SearchResults searchResults={searchResults} />
	      </div>
        )
    }
}