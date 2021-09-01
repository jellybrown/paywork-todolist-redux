import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoRequest } from "store/actionCreators";
import AddIcon from "assets/icon/add.svg";
import { AddButton, CreateWrapper, Input } from "./index.style";

const TodoCreate = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");

  // todo 생성 함수
  const onAddTodo = () => {
    dispatch(addTodoRequest(input));
    setInput("");
  };

  return (
    <CreateWrapper>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <AddButton onClick={onAddTodo}>
        <img src={AddIcon} alt="add icon" />
      </AddButton>
    </CreateWrapper>
  );
};

export default TodoCreate;
