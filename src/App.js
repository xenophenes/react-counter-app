import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  
  handleIncrement = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }));
  };
  
  handleDecrement = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count - 1
    }));
  };
  
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button type="button" onClick={this.handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <Counter />
  );
}

export default App;
