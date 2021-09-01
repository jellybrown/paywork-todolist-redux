import React, { useEffect } from "react";
import TodoList from "components/TodoList";
import TodoModal from "components/TodoModal";
import { useDispatch } from "react-redux";
import { loadTodoRequest } from "store/actionCreators";
import { HomeWrapper, AddButton } from "./index.style";
import AddIcon from "assets/icon/add.svg";
import useModal from "hooks/useModal";

const Home = () => {
  const dispatch = useDispatch();
  const [opened, openedModal, closeModal] = useModal();

  useEffect(() => {
    dispatch(loadTodoRequest());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <TodoList />
      <TodoModal opened={opened} closeModal={closeModal} />
      <AddButton onClick={openedModal}>
        <img src={AddIcon} alt="add icon" />
      </AddButton>
    </HomeWrapper>
  );
};

export default Home;
