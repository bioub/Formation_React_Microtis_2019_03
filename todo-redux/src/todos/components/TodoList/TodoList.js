import React, { PureComponent } from "react";
import { TodoItem } from "../TodoItem/TodoItem";

export class TodoList extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   return this.props.items !== nextProps.items;
  // }
  render() {
    const { items, onDeleteItem } = this.props;
    return (
      <div className="TodoList">
        {items.map(it => (
          <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
        ))}
      </div>
    );
  }
}
