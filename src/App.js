import React, { Component } from "react"
import "./App.css"
class App extends Component {
  state = {
    num: 0,
    likes: "likes"
  }
  buttonClick = x => {
    this.setState({
      likes: this.state.num === 0 ? "like" : "likes",
      num: this.state.num + 1
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.buttonClick}>
          {this.state.num} {this.state.likes}
        </button>
      </div>
    )
  }
}
export default App
