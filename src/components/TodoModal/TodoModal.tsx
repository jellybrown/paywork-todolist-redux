import {
  CloseButton,
  Header,
  ModalBox,
  ModalWrapper,
  Title,
  Input,
  SubmitButton,
} from "./index.style";
import React, { useState } from "react";
import DownArrowIcon from "assets/icon/down-arrow.svg";
import { useDispatch } from "react-redux";
import { addTodoRequest } from "store/actionCreators";

interface TodoModalProps {
  opened: boolean;
  closeModal: () => void;
}

const TodoModal = ({ opened, closeModal }: TodoModalProps) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");

  // todo 생성 함수
  const onAddTodo = () => {
    dispatch(addTodoRequest(input));
    setInput("");
    closeModal();
  };

  return (
    <ModalWrapper opened={opened}>
      <ModalBox opened={opened}>
        <Header>
          <Title>추가하기</Title>
          <CloseButton onClick={closeModal}>
            <img src={DownArrowIcon} alt="close button" />
          </CloseButton>
        </Header>
        <Input
          placeholder="오늘 할 일이 있나요?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SubmitButton onClick={onAddTodo}>확인</SubmitButton>
      </ModalBox>
    </ModalWrapper>
  );
};

export default TodoModal;
