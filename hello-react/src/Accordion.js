import React from "react";

export function Accordion({ title, items, collapse, onSelect }) {
  const itemsJsx = items.map(item => (
    <div key={item} onClick={() => onSelect(item)}>
      {item}
    </div>
  ));

  return (
    <div className="Accordion">
      <div className="Accordion-title">
        {title} {!collapse ? <span>&darr;</span> : <span>&uarr;</span>}
      </div>
      {!collapse && <div className="Accordion-items">{itemsJsx}</div>}
    </div>
  );
}
