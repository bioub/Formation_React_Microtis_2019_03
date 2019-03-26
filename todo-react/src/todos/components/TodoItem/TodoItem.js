import React from 'react';

export function TodoItem({item}) {
  return (
    <div className="TodoItem">
      {item.text}
    </div>
  );
}