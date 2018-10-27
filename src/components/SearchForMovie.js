import React, { Component } from 'react'

export default class SearchForMovie extends Component {

    onSubmit(e) {
        e.preventDefault()
        if (this.props.onSearch) {
            const userInput = this.input.value
            this.props.onSearch(userInput)
        }

        this.props.history.push('/results')

        this.input.value = ''
        this.input.focus()
    }

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                <input type="text" name="userInput" ref={input => (this.input = input)}/>
                <button>Search</button>
            </form>
        )
    }

}