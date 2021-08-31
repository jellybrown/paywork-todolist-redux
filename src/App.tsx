import React, { useCallback, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/Todo";
import { useDispatch } from "react-redux";
import { loadTodoRequest } from "./store/actions";
import { ActionType } from "./store/types";

function App() {
  const dispatch = useDispatch();

  const loadTodo = () => {
    dispatch({ type: ActionType.LOAD_TODO_REQUEST, payload: "/aa" });
  };

  // useEffect(() => {
  //   dispatch({ type: ActionType.LOAD_TODO_REQUEST, payload: "/aa" });
  // }, []);

  // useEffect(() => {
  //   loadTodo();
  // }, [loadTodo]);

  console.log("a");
  return (
    <>
      <TodoList />
      <button onClick={() => loadTodo()}>눌러</button>
    </>
  );
}

export default App;
