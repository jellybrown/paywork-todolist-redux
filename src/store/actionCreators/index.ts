import {
  LoadTodoRequestAction,
  AddTodoRequestAction,
  DeleteTodoRequestAction,
} from "./../actionTypes";
import { ActionType } from "./../types/index";

// 컴포넌트 내에서 사용할 함수들

// load 요청을 위한 함수
export const loadTodoRequest = (): LoadTodoRequestAction => {
  return {
    type: ActionType.LOAD_TODO_REQUEST,
  };
};

// add 요청을 위한 함수
export const addTodoRequest = (content: string): AddTodoRequestAction => {
  return {
    type: ActionType.ADD_TODO_REQUEST,
    payload: {
      content,
    },
  };
};

// delete 요청을 위한 함수
export const deleteTodoRequest = (id: string): DeleteTodoRequestAction => {
  return {
    type: ActionType.DELETE_TODO_REQUEST,
    payload: {
      id,
    },
  };
};
