import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/Todo";
import { useDispatch } from "react-redux";
import { AddTodoRequest, loadTodoRequest } from "./store/actionCreators";

function App() {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");

  // const loadTodo = () => {
  //   dispatch({ type: ActionType.LOAD_TODO_REQUEST, payload: { url: "/a" } });
  // };

  // useEffect(() => {
  //   dispatch({ type: ActionType.LOAD_TODO_REQUEST, payload: "/aa" });
  // }, []);

  // useEffect(() => {
  //   loadTodo();
  // }, [loadTodo]);

  const onAddTodo = () => {
    //
    dispatch(AddTodoRequest({ url: "/todo", content: input }));
  };

  return (
    <>
      <TodoList />
      <button onClick={() => dispatch(loadTodoRequest("/a"))}>loadTodo</button>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={onAddTodo}>생성</button>
      </div>
    </>
  );
}

export default App;
