import {
  LoadTodoRequestAction,
  AddTodoRequestAction,
  DeleteTodoRequestAction,
  UpdateContentTodoRequestAction,
  UpdateCheckTodoRequestAction,
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

type UpdateContentInfo = {
  id: string;
  content: string;
};

// update content 요청을 위한 함수
export const updateContentTodoRequest = (
  todo: UpdateContentInfo
): UpdateContentTodoRequestAction => {
  return {
    type: ActionType.UPDATE_CONTENT_TODO_REQUEST,
    payload: {
      id: todo.id,
      content: todo.content,
    },
  };
};

type UpdateCheckInfo = {
  id: string;
  isCheck: boolean;
};

// update check 요청을 위한 함수
export const updateCheckTodoRequest = (
  todo: UpdateCheckInfo
): UpdateCheckTodoRequestAction => {
  return {
    type: ActionType.UPDATE_CHECK_TODO_REQUEST,
    payload: {
      id: todo.id,
      isCheck: todo.isCheck,
    },
  };
};
