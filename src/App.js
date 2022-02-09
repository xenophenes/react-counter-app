import React, { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;

class Counter extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }));
  };
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}
