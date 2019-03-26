import React from 'react';
import css from './TodoItem.module.scss';

export function TodoItem({item, onDeleteItem}) {
  return (
    <div className={css.TodoItem}>
      {item.text}
      <button onClick={() => onDeleteItem(item)}>-</button>
    </div>
  );
}