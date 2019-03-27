import React from "react";
import { connect } from "react-redux";

function CounterControlled({ count, onIncrement }) {
  return (
    <button className="CounterControlled" onClick={onIncrement}>
      {count}
    </button>
  );
}

function mapStateToProps(state) {
  return {
    count: state.x
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement() {
      dispatch({ type: "COUNTER_INCREMENT" });
    }
  };
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterControlled);

export { CounterContainer };
