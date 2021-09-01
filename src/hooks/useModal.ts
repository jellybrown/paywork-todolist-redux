import { useState } from "react";

const useModal = (initialState = false) => {
  const [opened, setOpened] = useState(initialState);

  const openedModal = () => {
    setOpened(true);
  };

  const closeModal = () => {
    setOpened(false);
  };
  return [opened, openedModal, closeModal] as const;
};

export default useModal;
