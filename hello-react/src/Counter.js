import React, { Component } from "react";

class Counter extends Component {
  /*constructor() {
    super();
    this.state = {
      x: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }*/
  // https://reactjs.org/docs/faq-functions.html
  state = {
    x: 0
  };
  handleClick = (step) => {
    this.setState({
      x: this.state.x + step
    });
  }
  render() {
    return (
      <button className="Counter" onClick={() => this.handleClick(5)}>
        {this.state.x}
      </button>
    );
  }
}

function CounterControlled({x, onIncrement}) {
  return (
    <button className="CounterControlled" onClick={onIncrement}>
      {x}
    </button>
  );
}

export { Counter, CounterControlled };
