import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import './Header.css'

export default class Header extends Component {

    onSubmit(e) {
        e.preventDefault()
        // Return error message if no search term is added.
        if (this.input.value === "") {

            this.props.history.push('/searcherror')

        } else {

            if (this.props.onSearch) {

                const userInput = this.input.value

                // Calls getSearchResults() in App. js
                this.props.onSearch(userInput)

            }

            // Route to results page
            this.props.history.push('/results')

            // Reset input
            this.input.value = ''
            this.input.focus()

        }
    }

    render() {
        return (
            <header className="App-header">
                <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                <form className="search-form" onSubmit={ e => this.onSubmit(e) }>
                    <input type="text" name="userInput" ref={ input => (this.input = input) } />
                    <span className="search-bar"></span>
                    <label htmlFor="userInput">Enter a movie title...</label>
                    <button></button>
                </form>
            </header>
        )
    }

}

