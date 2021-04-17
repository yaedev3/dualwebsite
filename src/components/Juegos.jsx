import React, { Component } from "react"
import TarjetaJuego from './TarjetaJuego'

const style = {
    width: '95%',
    textAlign: 'center',
}

export default class Juegos extends Component {
    render() {
        const { games, url } = this.props
        return (
            <ul style={style}>
                {
                    games.map(x =>
                        <TarjetaJuego key={x.id} info={x} url={url} />
                    )
                }
            </ul>
        )
    }
}
