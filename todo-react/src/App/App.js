import React, { Component } from "react";
import "./App.css";
import { TodoList } from "../todos/components/TodoList/TodoList";
import { TodoForm } from "../todos/components/TodoForm/TodoForm";

function randomInt() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

class App extends Component {
  state = {
    newTodoInput: "Acheter d",
    todos: [
      {
        text: "Introduction à React",
        completed: true,
        id: randomInt()
      },
      {
        text: "Introduction à Redux",
        completed: false,
        id: randomInt()
      }
    ]
  };
  handleNewTodoChange = newTodo => {
    this.setState({
      newTodoInput: newTodo
    });
  };
  handleNewTodoAdd = newTodo => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: randomInt(), text: newTodo, completed: false }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <TodoForm
          newTodoInput={this.state.newTodoInput}
          onNewTodoChange={this.handleNewTodoChange}
          onNewTodoAdd={this.handleNewTodoAdd}
        />
        <TodoList items={this.state.todos} />
      </div>
    );
  }
}

export default App;
