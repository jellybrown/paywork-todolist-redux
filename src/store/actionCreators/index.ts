import {
  LoadTodoRequestAction,
  AddTodoRequestAction,
  DeleteTodoRequestAction,
  UpdateContentTodoRequestAction,
  UpdateCheckTodoRequestAction,
} from "./../actionTypes";
import { ActionType } from "./../types/index";

export const loadTodoRequest = (): LoadTodoRequestAction => {
  return {
    type: ActionType.LOAD_TODO_REQUEST,
  };
};

export const addTodoRequest = (content: string): AddTodoRequestAction => {
  return {
    type: ActionType.ADD_TODO_REQUEST,
    payload: {
      content,
    },
  };
};

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
