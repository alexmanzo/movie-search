import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {


    render() {

        return (
            <footer>
                <p>Return to<br /><a href="https://alexmanzo.me">alexmanzo.me</a></p>
            <div class="github">
              <a href="https://github.com/alexmanzo/movie-search" target="_blank">
                <i class="fab fa-github"></i>
                <p>See the code!</p>    
              </a>
            </div>
          </footer>
        )
    }

}

