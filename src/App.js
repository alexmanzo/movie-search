import React, { Component } from 'react';
import Header from './components/Header'
import SearchForMovie from './components/SearchForMovie'
import SearchResults from './components/SearchResults'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <SearchForMovie />
        <SearchResults />
      </div>
    )
  }
}

export default App;
