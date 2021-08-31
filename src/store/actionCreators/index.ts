import { LoadTodoRequestAction, AddTodoRequestAction } from "./../actionTypes";
import { ActionType } from "./../types/index";

export const loadTodoRequest = (): LoadTodoRequestAction => {
  return {
    type: ActionType.LOAD_TODO_REQUEST,
  };
};

export const AddTodoRequest = (content: string): AddTodoRequestAction => {
  return {
    type: ActionType.ADD_TODO_REQUEST,
    payload: {
      content,
    },
  };
};
