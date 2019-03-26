import React from 'react';
import {connect} from 'react-redux';

function Hello({name = 'React'}) {
  return (
    <div className="Hello">
      <span>Hello {name}</span>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    name: state.prenom,
  };
}

const HelloContainer = connect(mapStateToProps)(Hello);

export { HelloContainer };

// DOM (1995) :
// const divElt = document.createElement('div');
// divElt.className = 'Hello';
// const spanElt = document.createElement('span');
// spanElt.innerHTML = 'Hello React';
// divElt.appendChild(spanElt);

// jQuery (2005)
// $('<span>').html('Hello React').appendTo($('div')).addClass('Hello'));

// React (2015)
// React.createElement('div', {className: 'Hello'}, 
//   React.createElement('span', {}, `Hello ${name}`),
// );

// HTML
// <div class="Hello">
//   <span>Hello React</span>
// </div>

// React avec JSX (2015)
// <div className="Hello">
//   <span>Hello React</span>
// </div>