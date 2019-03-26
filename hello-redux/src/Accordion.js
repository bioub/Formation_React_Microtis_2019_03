import React from "react";
import {connect} from 'react-redux';

function Accordion({ title, items, collapse, onSelect }) {
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


function mapStateToProps(state) {
  return {
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect(item) {
      dispatch({type: 'PRENOM_SELECT', payload: item});
    },
  };
}

const AccordionContainer = connect(mapStateToProps, mapDispatchToProps)(Accordion);

export {
  AccordionContainer,
};