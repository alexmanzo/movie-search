import React from 'react';
import { connect } from 'react-redux';
import { searchMovie } from '../actions/searchMovie';

export class SearchForMovie extends React.Component {
  onSubmit(e) {
    e.preventDefault()

    const userInput = this.input.value
	this.props.dispatch(searchMovie(userInput))

	this.input.value=''
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

const mapStateToProps = state => ({
    navItems: state.searchMovie.results
})

export default connect(mapStateToProps)(SearchForMovie)