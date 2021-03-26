import React, { Component } from 'react'
import './App.css'
import Quiz from './Quiz'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        quiz_position: 1
    }
}
  render() {
    return (
      <Quiz />
    )
  }
}

export default App