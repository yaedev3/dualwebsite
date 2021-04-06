import React, { Component } from "react"
import TarjetaJuego from './TarjetaJuego'

export default class Juegos extends Component {
    render() {
        const { games } = this.props
        console.log(games)
        return (
            <ul>
                {
                    games.map(x =>
                        <TarjetaJuego key={x} info={x} />
                    )
                }
            </ul>
        )
    }
}
