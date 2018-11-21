import React, { Component } from 'react'
import Slider from "react-slick"
import Moment from 'react-moment'
import Loading from './Loading'
import nophoto from '../nophoto.svg'
import { Link } from 'react-router-dom'
import './CastProfile.css'


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
            <div className="filmography-container" key={index}>
                <Link to={`/movie/${movie.id}`}>
                    { (movie.poster_path === null) ? (<img className="filmography-no-photo" src={nophoto} alt='generic filler' />) : (<img className="filmography-no-photo" src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={ movie.original_title } />) }
                    <p className="filmography-title">{movie.original_title}</p>
                    <p className="filmography-year">{movie.release_date.substring(0,4)}</p>
                </Link>
            </div>    

        ))

        const settings = {
            className: 'filmography-list',
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 1350,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true
                    }
                },
                {
                    breakpoint: 1050,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                }
            ]
        }


        return ( 

            <div className="profile-container">
                <div className="profile">
                    { (this.props.bioData.castPhoto_path === null) ? (<img className="no-profile-photo" src={'https://secure.hmepowerweb.com/Resources/Images/NoImageAvailableLarge.jpg'} alt='no poster found' />) : (<img className="profile-photo" src={`https://image.tmdb.org/t/p/w1280/${this.props.bioData.castPhoto_path}`} alt={this.props.bioData.name} />) }
                    <div className="profileData">
                        <h1 className="profile-name">{ this.props.bioData.castName }</h1>
                        <div className="profile-details">
                            <p><strong>Date of Birth:</strong><br /><Moment format="MMMM Do, YYYY">{this.props.bioData.birthday}</Moment></p>
                            { (this.props.bioData.deathday === null) ? (null) : (<p><strong>Date of Death:</strong><br /> { <Moment format="MMMM Do, YYYY">{this.props.bioData.deathday}</Moment> }</p>) }
                            <p><strong>Biography</strong><br />{ this.props.bioData.bio }</p>
                        </div>
                    </div>
                </div>
                <h2>Filmography</h2>
                <Slider {...settings}>
                    { filmography }
                </Slider>
            </div>

        )
    }
}