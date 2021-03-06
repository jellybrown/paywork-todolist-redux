import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodoRequest,
  updateCheckTodoRequest,
  updateContentTodoRequest,
} from "store/actionCreators";
import { Itodo } from "../../types";
import { CheckBox, DeleteButton, EditInput, Item, Label } from "./index.style";
import TrashIcon from "assets/icon/trash.svg";

interface TodoItemProps {
  data: Itodo;
  isPink: boolean;
}
const TodoItem = ({ data, isPink }: TodoItemProps) => {
  const [checked, setChecked] = useState<boolean>(data.isCheck);
  const [input, setInput] = useState<string>(data.content);
  const [isEditMode, setisEditMode] = useState<boolean>(false);
  const editRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    const todo = {
      id: data.id,
      isCheck: checked,
    };
    dispatch(updateCheckTodoRequest(todo));
  }, [dispatch, checked, data.id]);

  const onDeleteTodo = () => {
    dispatch(deleteTodoRequest(data.id));
  };

  const onEditTodo = useCallback(() => {
    const todo = {
      id: data.id,
      content: input,
    };
    dispatch(updateContentTodoRequest(todo));
  }, [input, data.id, dispatch]);

  useEffect(() => {
    if (!isEditMode) return;
    onEditTodo();
  }, [isEditMode, onEditTodo]);

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      editRef.current?.blur();
    }
  };

  return (
    <Item>
      <CheckBox
        type="checkbox"
        checked={checked}
        onChange={(e) => onChangeCheck(e)}
        id={data.id}
      />
      <EditInput
        ref={editRef}
        onFocus={() => setisEditMode(true)}
        onBlur={() => setisEditMode(false)}
        defaultValue={data.content}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => onKeyPress(e)}
        isCheck={checked}
        spellCheck={false}
      />
      <Label
        isPink={isPink}
        isCheck={checked}
        isEditMode={isEditMode}
        htmlFor={data.id}
      >
        {data.content}
      </Label>
      <DeleteButton onClick={onDeleteTodo} isEditMode={isEditMode}>
        <img src={TrashIcon} alt="delete button" />
      </DeleteButton>
    </Item>
  );
};

export default React.memo(TodoItem);
