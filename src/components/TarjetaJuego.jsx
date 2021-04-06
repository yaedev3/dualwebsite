import React, { Component } from 'react';

export default class TarjetaJuego extends Component {
    render() {
        const { info } = this.props

        return (
            <div>
                <p>{info}</p>
                <img src={info} alt=""/>
            </div>
        )
    }
}
