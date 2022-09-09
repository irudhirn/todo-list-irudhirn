import React from "react";
import { useState } from "react";

const TodoItem = ({
  id,
  todo,
  isCompleted,
  editTodo,
  deleteTodo,
  completedHandler,
}) => {
  const [isDone, setIsDone] = useState(isCompleted);
  const [deleting, setDeleting] = useState(false);

  const style = {
    transform: "translateX(-100%)",
    opacity: 0,
    transition: "all 0.4s ease",
  };

  return (
    // <li className={`todo ${isDone ? "done" : ""}`} id={id} style={style}>
    <li
      className={`todo ${isDone ? "done" : ""}`}
      id={id}
      style={deleting ? style : {}}
    >
      <span className="text">{todo}</span>
      <span className="icons">
        <span
          className="icon icon__check"
          onClick={() => {
            setIsDone((prev) => !prev);
            completedHandler(id, !isDone);
          }}
        >
          <i className="fa-solid fa-check"></i>
        </span>
        <span className="icon icon__edit" onClick={() => editTodo(id)}>
          <i className="fa-solid fa-pen"></i>
        </span>
        <span
          className="icon icon__delete"
          onClick={() => {
            deleteTodo(id);
            setDeleting(() => true);
          }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </span>
      </span>
    </li>
  );
};

export default TodoItem;
