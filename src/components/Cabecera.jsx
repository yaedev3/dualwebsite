import React, { Component } from 'react';

const styles = {
    container: {
        textAligh: 'center',
        listStyle: 'none',
        border: '1px solid black',
        // width: '95%',
        margin: 'auto',
        textAlign:'center',
    },
    option: {
        display: 'inline-block',
        margin:'15px'
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
