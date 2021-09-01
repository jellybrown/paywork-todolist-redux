import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/Todo";
import { useDispatch } from "react-redux";
import { addTodoRequest, loadTodoRequest } from "./store/actionCreators";

function App() {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");

  const onAddTodo = () => {
    //
    dispatch(addTodoRequest(input));
  };

  useEffect(() => {
    dispatch(loadTodoRequest());
  }, [dispatch]);

  return (
    <>
      <TodoList />
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={onAddTodo}>생성</button>
      </div>
    </>
  );
}

export default App;
