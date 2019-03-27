import React from "react";
import "./App.css";
import { TodoFormContainer } from "../todos/containers/TodoFormContainer";
import { TodoListContainer } from "../todos/containers/TodoListContainer";

function App() {
  return (
    <div className="App">
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
}

export default App;
