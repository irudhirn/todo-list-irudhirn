import React from "react";

const Filters = ({
  completed,
  uncompleted,
  setCompleted,
  setUncompleted,
  clearAllHandler,
}) => {
  return (
    <div className="filters">
      <div className="filters__filter">
        <span
          className="filter"
          onClick={() => {
            setCompleted(() => false);
            setUncompleted(() => false);
          }}
          style={
            !completed && !uncompleted
              ? { color: "#00d2ff" }
              : { color: "#daedf6" }
          }
        >
          All
        </span>
        <span
          className="filter"
          onClick={() => {
            setCompleted(() => true);
            setUncompleted(() => false);
          }}
          style={
            completed && !uncompleted
              ? { color: "#00d2ff" }
              : { color: "#daedf6" }
          }
        >
          Completed
        </span>
        <span
          className="filter"
          onClick={() => {
            setCompleted(() => false);
            setUncompleted(() => true);
          }}
          style={
            !completed && uncompleted
              ? { color: "#00d2ff" }
              : { color: "#daedf6" }
          }
        >
          Uncompleted
        </span>
      </div>
      <div className="filters__clear">
        <span className="filters__clear-all filter" onClick={clearAllHandler}>
          Clear all
        </span>
      </div>
    </div>
  );
};

export default Filters;
