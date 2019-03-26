import React, { Component } from "react";
import { Hello } from "./Hello";
import { Clock } from "./Clock";
import { Counter, CounterControlled } from "./Counter";
import { Login } from "./Login";
import { Accordion } from "./Accordion";

class App extends Component {
  state = {
    x: 0,
    prenom: "Romain"
  };
  handleClick = () => {
    this.setState({
      x: this.state.x + 1
    });
  };
  handleSelect = item => {
    this.setState({
      prenom: item
    });
  };
  render() {
    return (
      <div className="App">
        <Hello />
        <Hello name={this.state.prenom} />
        <Clock />
        <h2>Uncontrolled Counter</h2>
        <Counter />
        <Counter />
        <h2>Controlled Counter</h2>
        <CounterControlled x={this.state.x} onIncrement={this.handleClick} />
        <CounterControlled x={this.state.x} onIncrement={this.handleClick} />
        <Login />
        <Accordion
          title="Prénoms"
          items={["Romain", "Jean", "Eric"]}
          collapse={false}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export { App };
