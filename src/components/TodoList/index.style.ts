import styled from "styled-components";
import CheckCircle from "assets/icon/check-circle.svg";
import PinkCircle from "assets/icon/pink-circle.svg";
import BlueCircle from "assets/icon/blue-circle.svg";

const LEFT_MARGIN = "72px";

export const ListHeader = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  color: rgba(255, 255, 255, 0.3);

  > h2 {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  background-color: #081b52;
  width: 100%;
  padding: 25px ${LEFT_MARGIN};
  margin: 8px 20px;
  border-radius: 27px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const EditInput = styled.input<{ isCheck: boolean }>`
  z-index: 3;
  background-color: #081b52;
  color: rgba(255, 255, 255, 0.8);
  border: none;
  outline: none;
  padding: 25px 0px;
  margin: 0 ${LEFT_MARGIN};
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  width: calc(100% - 130px);
  border-radius: inherit;
  opacity: ${({ isCheck }) => (isCheck ? "0" : "1")};
  visibility: ${({ isCheck }) => (isCheck ? "hidden" : "visible")};
`;

export const CheckBox = styled.input`
  position: absolute;
  left: -9999%;
`;

interface CheckProps {
  isCheck: boolean;
  isPink: boolean;
  isEditMode: boolean;
}

export const Label = styled.label<CheckProps>`
  color: rgba(255, 255, 255, 0.4);
  position: relative;
  cursor: pointer;
  transition: 0.2s;
  opacity: ${({ isEditMode }) => (isEditMode ? "0" : "1")};
  visibility: ${({ isEditMode }) => (isEditMode ? "hidden" : "visible")};
  padding: 8px 0;

  &:before {
    position: absolute;
    content: "";
    left: -40px;
    top: 50%;
    transform: translateY(-50%);
    width: 27px;
    height: 27px;
    transition: 0.2s;
    background-size: cover;
    background-image: ${({ isCheck, isPink }) =>
      isCheck
        ? `url(${CheckCircle})`
        : isPink
        ? `url(${PinkCircle})`
        : `url(${BlueCircle})`};
  }

  &:after {
    position: absolute;
    content: "";
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const DeleteButton = styled.button<{ isEditMode: boolean }>`
  width: 20px;
  height: 20px;
  position: absolute;
  background: none;
  border: none;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: ${({ isEditMode }) => (isEditMode ? "0" : "0.2")};
  visibility: ${({ isEditMode }) => (isEditMode ? "hidden" : "visible")};
  transition: 0.2s;

  > img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    opacity: 0.7;
  }
`;
