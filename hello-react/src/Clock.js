import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      options: {
        format: 'HH:mm:ss',
      },
      now: new Date(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      // Object.assign() / shallow merge
      this.setState({
        options: {
          delay: 1000,
        },
        now: new Date(),
      });
    }, 1000);
  }
  render() {
    // dans un composant stateful on manipule les props via this.props
    return (
      <div className="Clock">
        {this.state.now.toLocaleTimeString()}
      </div>
    );
  }
}

export { Clock };