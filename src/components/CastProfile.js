import React, { Component } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom'


export default class castProfile extends Component {

    componentDidMount() {
        const firstDash = this.props.location.pathname.indexOf('-')
        const secondDash = this.props.location.pathname.indexOf('-', firstDash + 1)

        const castId = this.props.location.pathname.substring(19, secondDash)
        this.props.onMount(castId)
    }


    componentDidUpdate(prevProps) {
        const firstDash = this.props.location.pathname.indexOf('-')
        const secondDash = this.props.location.pathname.indexOf('-', firstDash + 1)

        const currentCastId = this.props.location.pathname.substring(19, secondDash)
        const prevCastId = prevProps.location.pathname.substring(19, secondDash)
        if (prevCastId !== currentCastId) {
            this.props.onMount(currentCastId)
        }
        window.scrollTo(0, 0)
    }

    render() {
        if (this.props.bioData.castName === null || this.props.filmography === undefined) {
            return <Loading />
        }


        const filmography = this.props.filmography.map((movie, index) => (
            <Link to={`/movie-search/movie/${movie.id}`} key={index}>
                <div>
                    <div>{ (movie.poster_path === null) ? (<img src={'https://secure.hmepowerweb.com/Resources/Images/NoImageAvailableLarge.jpg'} alt='no poster found' />) : (<img src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={movie.original_title} />) }</div>
                    <h4>{movie.original_title}</h4>
                    <h5>{movie.release_date.substring(0,4)}</h5>
                </div>
            </Link>
        ))


        return (
            <div>
                <h1>{ this.props.bioData.castName }</h1>
                <p>{ this.props.bioData.birthday }</p>
                <p>{ this.props.bioData.deathday }</p>
                <p>{ this.props.bioData.bio }</p>
                <div>{ (this.props.bioData.castPhoto_path === null) ? (<img src={'https://secure.hmepowerweb.com/Resources/Images/NoImageAvailableLarge.jpg'} alt='no poster found' />) : (<img src={`https://image.tmdb.org/t/p/w1280/${this.props.bioData.castPhoto_path}`} alt={this.props.bioData.name} />) }</div>
                { filmography }
            </div>
        )
    }
}