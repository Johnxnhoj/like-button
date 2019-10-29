import React, { Component } from "react"
import "./app.css"

class MyComponent extends Component {
  state = {
    likes: 0
  }
  handleClick = e => {
    this.setState({
      likes: this.state.likes + 1
    })
  }
  render() {
    if (this.state.like === 1) {
      this.state.word = "like"
    } else {
      this.state.word = "like"
    }
    return (
      <div>
        <button onClick={this.handClick}>
          {this.state.likes} {this.state.word}
        </button>
      </div>
    )
  }
}

export default MyComponet
