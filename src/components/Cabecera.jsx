import React, { Component } from 'react';

const styles = {
    inline: {
        display: 'inline'
    }
}

export default class Cabecera extends Component {
    render() {
        const { headers } = this.props

        return (
            <ul style={styles.inline}
            >
                {
                    headers.map(x =>
                        <li key={x}>{x}</li>
                    )
                }
            </ul>
        )
    }
}
