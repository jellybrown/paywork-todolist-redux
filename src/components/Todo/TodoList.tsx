import React from "react";
import { useSelector } from "react-redux";
import { RootType } from "../../store/reducers";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList } = useSelector((state: RootType) => state.todos);

  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default TodoList;
