import styled from "styled-components";

export const ModalWrapper = styled.section<{ opened: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  overflow: hidden;
  transition-delay: ${({ opened }) => (opened ? "0" : "0.4s")};
`;

export const ModalBox = styled.div<{ opened: boolean }>`
  background: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 30px;
  border-radius: 30px 30px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  transition-delay: 0.2s;

  transform: ${({ opened }) =>
    opened ? "translateY(0%)" : "translateY(100%)"};
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  margin-bottom: 50px;
`;

export const Title = styled.h2`
  flex: 1;
  text-align: center;
  font-size: 18px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 20px;

  > img {
  }
`;

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #999999;
  width: 76%;
  max-width: 760px;
  margin-right: 20px;
  font-size: 16px;
  text-align: center;
  padding: 10px 0;
  margin: 40px 0;

  &::placeholder {
    color: #aaaaaa;
  }
`;

export const SubmitButton = styled.button`
  background-color: #081b52;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  width: 80%;
  max-width: 800px;
  padding: 22px 0;
  color: rgba(255, 255, 255, 0.5);
  font-weight: bold;
  font-size: 18px;
  transition: 0.3s;
  margin-bottom: 40px;

  &:hover {
    color: #fff;
  }
`;
