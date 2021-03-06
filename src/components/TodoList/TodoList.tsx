import React from "react";
import { useSelector } from "react-redux";
import { RootType } from "store/reducers";
import { List, ListHeader } from "./index.style";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList } = useSelector((state: RootType) => state.todos);
  const checkPink = (index: number): boolean => {
    return index % 2 === 0 ? true : false;
  };

  return (
    <>
      <ListHeader>
        <h2>오늘의 할일</h2>
        <span>{todoList.length} 개</span>
      </ListHeader>
      <List>
        {todoList.map((item, i) => (
          <TodoItem key={item.id} data={item} isPink={checkPink(i)} />
        ))}
      </List>
    </>
  );
};

export default React.memo(TodoList);
