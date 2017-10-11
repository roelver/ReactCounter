import React, { Component } from 'react';

export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = { counter: 0 };
  }

  modifyCounter (diff) {
    this.setState({ counter: this.state.counter + diff });
  }

  render () {
    return (
      <div>
        <h1 className="app-root">React Counter: {this.state.counter}</h1>
        <button onClick={() => this.modifyCounter(1)}><b>+</b></button>
        <button onClick={() => this.modifyCounter(-1)}><b>-</b></button>
      </div>
    );
  }
}
