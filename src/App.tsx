import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "components/TodoList";
import { useDispatch } from "react-redux";
import { loadTodoRequest } from "store/actionCreators";
import TodoCreate from "components/TodoCreate";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodoRequest());
  }, [dispatch]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default App;
