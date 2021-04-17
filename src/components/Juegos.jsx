import React, { Component } from "react"
import TarjetaJuego from './TarjetaJuego'
import { colors } from './Colors'

const { backgroundColor, primaryColor } = colors

const style = {
    textAlign: 'center',
    backgroundColor: backgroundColor,
    borderTop: '1px solid ' + primaryColor,
    margin: '0px auto',
    height:'100vh',
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
