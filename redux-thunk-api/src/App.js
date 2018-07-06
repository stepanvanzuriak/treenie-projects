import React, { Component } from 'react'
import './App.css'
import Books from './containers/Books'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Books />
        </div>
      </div>
    )
  }
}

export default App
