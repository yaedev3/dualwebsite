import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cabecera from './components/Cabecera'
import Pie from './components/Pie'
import Juegos from './components/Juegos'

class App extends Component {
  render() {
    const { games, headers } = this.props
    return (
      <div>
        <Cabecera headers={headers} />
        <Juegos games={games} />
        <Pie />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  const { Juegos: { data: games } } = state
  const { Encabezados: { data: headers } } = state

  return {
    games,
    headers,
  }
}
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
