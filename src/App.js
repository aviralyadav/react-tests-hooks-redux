import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0
    }
  }
  increment = () => {
    this.setState(prevState => {
      return {counter: prevState.counter + 1};
    });
  }
  render() {
    // const 
    return (
      <div className="App" data-test="component-app">
        <h2 data-test="title">Hello React</h2> 
    <div data-test="counter-display">Count: {this.state.counter}</div>
        <button data-test="increment-button" onClick={() => this.setState({counter: this.state.counter + 1})}>Increment Counter</button>
      </div>
    );
  }
}

export default App;
