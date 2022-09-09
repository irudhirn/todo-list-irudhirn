import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  completed,
  uncompleted,
  todos,
  editTodo,
  deleteTodo,
  completedHandler,
}) => {
  return (
    <ul className="todos__list">
      {!completed &&
        !uncompleted &&
        todos.map((todoEl) => {
          const { id, todo, isCompleted } = todoEl;
          return (
            <TodoItem
              key={id}
              id={id}
              todo={todo}
              isCompleted={isCompleted}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              completedHandler={completedHandler}
            />
          );
        })}
      {completed &&
        !uncompleted &&
        todos
          .filter((todo) => todo.isCompleted === true)
          .map((todoEl) => {
            const { id, todo, isCompleted } = todoEl;
            return (
              <TodoItem
                key={id}
                id={id}
                todo={todo}
                isCompleted={isCompleted}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                completedHandler={completedHandler}
              />
            );
          })}
      {uncompleted &&
        !completed &&
        todos
          .filter((todo) => todo.isCompleted !== true)
          .map((todoEl) => {
            const { id, todo, isCompleted } = todoEl;
            return (
              <TodoItem
                key={id}
                id={id}
                todo={todo}
                isCompleted={isCompleted}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                completedHandler={completedHandler}
              />
            );
          })}
      {completed &&
        ![...todos.filter((todo) => todo.isCompleted === true)].length &&
        todos.length !== 0 && <p>No task is completed.</p>}
      {uncompleted &&
        ![...todos.filter((todo) => todo.isCompleted !== true)].length &&
        todos.length !== 0 && <p>No task is left uncompleted.</p>}
    </ul>
  );
};

export default TodoList;
