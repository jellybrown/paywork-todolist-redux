import { ActionType } from "./../types/index";
import { LoadTodoRequestAction } from "./../actions/index";

export const loadTodoRequest = (url: string): LoadTodoRequestAction => {
  return {
    type: ActionType.LOAD_TODO_REQUEST,
    payload: {
      url,
    },
  };
};
