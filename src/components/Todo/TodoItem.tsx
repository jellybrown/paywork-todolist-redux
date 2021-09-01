import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoRequest } from "../../store/actionCreators";
import { Itodo } from "../../types";

interface TodoItemProps {
  data: Itodo;
}
const TodoItem = ({ data }: TodoItemProps) => {
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
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChangeCheck(e)}
      />
      <label>{data.content}</label>
      <button onClick={onDeleteTodo}>삭제</button>
    </div>
  );
};

export default TodoItem;
