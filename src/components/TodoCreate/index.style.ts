import styled from "styled-components";

export const CreateWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  margin: 20px 0%;
`;

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  border-bottom: 2px solid #081b52;
  flex: 1;
  margin-right: 20px;
  font-size: 16px;
  text-align: center;
  padding: 10px 0;
`;

export const AddButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  width: 50px;
  height: 50px;
  background-color: #cc3aed;
  border-radius: 20px;
  transition: 0.3s;

  > img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    background-color: #1e3783;
  }
`;
