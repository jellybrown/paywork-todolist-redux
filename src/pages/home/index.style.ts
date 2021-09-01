import styled from "styled-components";

export const HomeWrapper = styled.section<{ opened: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: relative;
  height: ${({ opened }) => (opened ? "100vh" : "auto")};
  overflow: ${({ opened }) => (opened ? "hidden" : "auto")};
  padding: 40px 0 80px;
`;

export const Header = styled.header`
  padding: 40px;
  > span {
    color: #fff;
    opacity: 0.4;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const AddButton = styled.button`
  background: #132c75;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.05);
  padding: 25px 40px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  opacity: 0.6;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
`;
