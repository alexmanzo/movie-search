import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Cast extends Component {

    render() {
        const cast = this.props.castData.map((cast, index) => (
            <li key={index}>{cast.character}: {<Link to={`/cast/${cast.id}-${cast.name}`}>{cast.name}</Link>}</li>
        ))

        return (    
            <ul>
                {cast}
			</ul>
        )
    }
}
