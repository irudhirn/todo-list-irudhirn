import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Form from "./Form";
import Filters from "./Filters";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [uncompleted, setUncompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodo, setEditingTodo] = useState("");
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    if (localStorage.getItem("todoList") === null) {
      setTodos(() => []);
    } else {
      setTodos(() => JSON.parse(localStorage.getItem("todoList")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos, isEditing]);

  const editTodo = (id) => {
    setIsEditing(() => true);

    const i = todos.findIndex((todo) => todo.id === id);
    setEditingTodo(() => i);
    setInputVal(() => todos[i].todo);
  };

  const deleteTodo = (id) => {
    setTimeout(() => {
      setTodos((prev) => prev.filter((todoEl) => todoEl.id !== id));
    }, 400);
  };

  const completedHandler = (id, curState) => {
    const tempTodos = [...todos];
    const curTodoIndex = tempTodos.findIndex((todo) => todo.id === id);
    tempTodos[curTodoIndex].isCompleted = curState;
    const newTodos = [...tempTodos];

    setTodos(() => [...newTodos]);
  };

  const inputHandler = (val) => {
    setInputVal(() => val);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isEditing) {
      todos[editingTodo].todo = inputVal;

      setInputVal(() => "");
      setIsEditing(() => false);
      setEditingTodo(() => undefined);
      return;
    }

    const newId = new Date().getTime().toString().slice(-4);
    setTodos((prev) => [
      ...prev,
      { id: +newId, todo: inputVal, isCompleted: false },
    ]);

    setInputVal(() => "");
  };

  const clearAllHandler = () => {
    setTodos(() => []);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <Form
        submitHandler={submitHandler}
        inputVal={inputVal}
        inputHandler={inputHandler}
      />
      <div className="todos">
        {!todos.length ? <p className="message">hit enter to add todos</p> : ""}
        <TodoList
          todos={todos}
          completed={completed}
          uncompleted={uncompleted}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          completedHandler={completedHandler}
        />
      </div>
      {todos.length !== 0 && (
        <Filters
          completed={completed}
          uncompleted={uncompleted}
          setCompleted={setCompleted}
          setUncompleted={setUncompleted}
          clearAllHandler={clearAllHandler}
        />
      )}
    </div>
  );
}

export default App;
