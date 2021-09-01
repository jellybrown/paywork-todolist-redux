import styled from "styled-components";

export const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: relative;
`;

export const AddButton = styled.button`
  background: #132c75;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.05);
  padding: 25px 40px;
  position: absolute;
  right: 40px;
  bottom: 40px;
  opacity: 0.6;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
`;
