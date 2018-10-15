import React, { Component } from 'react'

export default class Cast extends Component {

    render() {
        const cast = this.props.castData.map((cast, index) => (
            <li key={index}>{cast.character}: {cast.name}</li>
        ))

        return (    
            <ul>
                {cast}
			</ul>
        )
    }
}
