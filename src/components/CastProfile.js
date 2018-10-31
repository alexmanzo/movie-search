import React, { Component } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom'


export default class castProfile extends Component {

    // Pulls castID from Router path and calls getCastProfile() in App.js
    componentDidMount() {

        const path = this.props.location.pathname
        const castId = path.slice(6, path.indexOf('-'))
        this.props.onMount(castId)

    }

    // If navigating from movie page to movie page, allows component to reset.
    componentDidUpdate(prevProps) {

        const path = this.props.location.pathname
        const prevPath = prevProps.location.pathname

        const currentCastId = path.slice(6, path.indexOf('-'))
        const prevCastId = prevPath.slice(6, prevPath.indexOf('-'))

        if (prevCastId !== currentCastId) {

            this.props.onMount(currentCastId)

        }

        // Scrolls back to top of page, otherwise components re-renders in place.
        window.scrollTo(0, 0)
    }

    render() {

        // Shows loading while AJAX calls are made.
        if (this.props.bioData.castName === null || this.props.filmography === undefined) {
            return <Loading />
        }

        const filmography = this.props.filmography.map((movie, index) => (

            <Link to={`/movie/${movie.id}`} key={index}>
                <div>
                    <div>{ (movie.poster_path === null) ? (<img src={'https://secure.hmepowerweb.com/Resources/Images/NoImageAvailableLarge.jpg'} alt='no poster found' />) : (<img src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={ movie.original_title } />) }</div>
                    <h4>{movie.original_title}</h4>
                    <h5>{movie.release_date.substring(0,4)}</h5>
                </div>
            </Link>

        ))


        return ( 

            <div>
                <h1>{ this.props.bioData.castName }</h1>
                <p>Date of Birth: { this.props.bioData.birthday }</p>
                { (this.props.bioData.deathday === null) ? (null) : (<p>Date of Death: { this.props.bioData.deathday }</p>) }
                <p>{ this.props.bioData.bio }</p>
                { (this.props.bioData.castPhoto_path === null) ? (<img src={'https://secure.hmepowerweb.com/Resources/Images/NoImageAvailableLarge.jpg'} alt='no poster found' />) : (<img src={`https://image.tmdb.org/t/p/w1280/${this.props.bioData.castPhoto_path}`} alt={this.props.bioData.name} />) }
                { filmography }
            </div>

        )
    }
}