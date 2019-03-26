import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem';

export function TodoList({items, onDeleteItem}) {
  return (
    <div className="TodoList">
      {items.map((it) => <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />)}
    </div>
  );
}