import React, { Component } from 'react';
import storeImage from '../google-store.jpg'

const styles = {
    card: {
        border: '1px solid black',
        width: '200px',
        textAlign: 'center',
        float: 'left',
        borderRadius: '15px',
        margin: '10px',
        // padding:'10px',
    },
    image: {
        width: '150px',
        borderRadius: '20px',
        margin: '5px',
    },
    title: {
        fontSize: '20px',
    },
    storeImage: {
        width: '150px',
    },
}

export default class TarjetaJuego extends Component {
    render() {
        const { info, url } = this.props
        const { store, title } = info
        const imageUrl = url + info.image

        return (
            <div style={styles.card}>
                <p style={styles.title}>{title}</p>
                <div>
                    <img style={styles.image} src={imageUrl} />
                </div>
                <a target='_blank' href={store}>
                    <img style={styles.storeImage} src={storeImage} />
                </a>
            </div>
        )
    }
}
