import React from 'react';

export function TodoItem({item, onDeleteItem}) {
  return (
    <div className="TodoItem">
      {item.text}
      <button onClick={() => onDeleteItem(item)}>-</button>
    </div>
  );
}