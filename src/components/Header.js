import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import './Header.css'

export default class Header extends Component {

    onSubmit(e) {
        e.preventDefault()
        if (this.input.value === "") {
            this.props.history.push('/searcherror')
        } else {

            if (this.props.onSearch) {
                const userInput = this.input.value
                this.props.onSearch(userInput)
            }
            this.props.history.push('/results')

            this.input.value = ''
            this.input.focus()

        }
    }

    render() {
        return (
            <header className="App-header">
                <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <input type="text" name="userInput" ref={input => (this.input = input)}/>
                    <button>Search</button>
                </form>
            </header>
        )
    }

}

