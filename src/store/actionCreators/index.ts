import { LoadTodoRequestAction, AddTodoRequestAction } from "./../actionTypes";
import { ActionType } from "./../types/index";

export const loadTodoRequest = (url: string): LoadTodoRequestAction => {
  return {
    type: ActionType.LOAD_TODO_REQUEST,
    payload: {
      url,
    },
  };
};

type AddData = {
  url: string;
  content: string;
};

export const AddTodoRequest = (data: AddData): AddTodoRequestAction => {
  return {
    type: ActionType.ADD_TODO_REQUEST,
    payload: {
      url: data.url,
      content: data.content,
    },
  };
};
