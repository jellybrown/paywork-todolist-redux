import styled from "styled-components";
import CheckCircle from "assets/icon/check-circle.svg";
import PinkCircle from "assets/icon/pink-circle.svg";
import BlueCircle from "assets/icon/blue-circle.svg";

export const List = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  background-color: #081b52;
  width: 100%;
  padding: 25px 60px;
  margin: 4px 20px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const CheckBox = styled.input`
  position: absolute;
  left: -9999%;
`;

interface CheckProps {
  isCheck: boolean;
  isPink: boolean;
}

export const Label = styled.label<CheckProps>`
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  cursor: pointer;
  transition: 0.2s;

  &:before {
    position: absolute;
    content: "";
    left: -40px;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    transition: 0.2s;
    background-image: ${({ isCheck, isPink }) =>
      isCheck
        ? `url(${CheckCircle})`
        : isPink
        ? `url(${PinkCircle})`
        : `url(${BlueCircle})`};
  }
`;

export const DeleteButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  background: none;
  border: none;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.2;
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
