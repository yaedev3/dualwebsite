import React, { Component } from "react"
import TarjetaJuego from './TarjetaJuego'

export default class Juegos extends Component {
    render() {
        const { games, url} = this.props
        return (
            <ul>
                {
                    games.map(x =>
                        <TarjetaJuego key={x} info={url + x} />
                    )
                }
            </ul>
        )
    }
}
