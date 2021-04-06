import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cabecera from './components/Cabecera'
import Pie from './components/Pie'

class App extends Component{
  render(){
    const { games } = this.props
    return(
      <div>
        <Cabecera />
        <Pie />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { Juegos: { data: games } } = state

  console.log(state)
  
  return {
    games,
  }
}
const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
