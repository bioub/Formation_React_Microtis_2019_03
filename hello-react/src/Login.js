import React, { Component } from 'react'

export class Login extends Component {
  state = {
    username: '',
    password: '',
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  
  handleSubmit = /** @param {Event} event */ (event) => {
    event.preventDefault();
    // todo
  }
  render() {
    return (
      <form className="Login" onSubmit={this.handleSubmit}>
        <div>
          Username: <input name="username" value={this.state.username} onChange={this.handleChange} />
        </div>
        <div>
          Password: <input name="password" value={this.state.password} onChange={this.handleChange} />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    )
  }
}
