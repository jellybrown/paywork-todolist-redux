import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoRequest } from "store/actionCreators";
import { Itodo } from "../../types";
import { CheckBox, DeleteButton, Item, Label } from "./index.style";
import TrashIcon from "assets/icon/trash.svg";

interface TodoItemProps {
  data: Itodo;
  isPink: boolean;
}
const TodoItem = ({ data, isPink }: TodoItemProps) => {
  const [checked, setChecked] = useState(data.isCheck);
  const dispatch = useDispatch();

  // todo 체크(혹은 해제)시 상태 변경을 위한 함수
  const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
    // dispatch
  };

  // todo 삭제를 위한 함수
  const onDeleteTodo = () => {
    dispatch(deleteTodoRequest(data.id));
  };

  return (
    <Item>
      <CheckBox
        type="checkbox"
        checked={checked}
        onChange={(e) => onChangeCheck(e)}
        id={data.id}
      />
      <Label isPink={isPink} isCheck={checked} htmlFor={data.id}>
        {data.content}
      </Label>
      <DeleteButton onClick={onDeleteTodo}>
        <img src={TrashIcon} alt="delete button" />
      </DeleteButton>
    </Item>
  );
};

export default TodoItem;
