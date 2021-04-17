import React, { Component } from 'react';
import { colors } from './Colors'

const { backgroundColor, accentColor } = colors

const styles = {
    container: {
        textAligh: 'center',
        listStyle: 'none',
        margin: '0px auto',
        textAlign: 'center',
        backgroundColor: backgroundColor,
    },
    option: {
        display: 'inline-block',
        margin: '15px',
        fontSize: '20px',
        color: accentColor,
    },
}

export default class Cabecera extends Component {
    render() {
        const { headers } = this.props

        return (
            <ul style={styles.container}
            >
                {
                    headers.map(x =>
                        <li style={styles.option} key={x}>{x}</li>
                    )
                }
            </ul>
        )
    }
}
