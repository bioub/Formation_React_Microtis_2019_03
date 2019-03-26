import React, { Component } from 'react';
import { CounterContainer } from './Counter';
import { HelloContainer } from './Hello';
import { AccordionContainer } from './Accordion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
        <CounterContainer />
        <HelloContainer />
        <AccordionContainer title="Prenoms" items={['Romain', 'Eric', 'Jean']} />
      </div>
    );
  }
}

export default App;
