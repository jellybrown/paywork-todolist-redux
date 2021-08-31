import { Itodo } from "../../types";
import {
  AddTodoSuccessAction,
  LoadTodoSuceessAction,
} from "./../actions/index";
import { ActionType } from "../types/index";

import produce from "immer";
import { ActionRequest } from "../actions";

interface TodoState {
  loading: boolean;
  error: boolean;
  todoList: Itodo[];
  count: number;
}

const initialState: TodoState = {
  loading: false,
  error: false,
  todoList: [],
  count: 0,
};

const reducer = (
  state: TodoState = initialState,
  action: ActionRequest
): TodoState =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionType.LOAD_TODO_REQUEST:
        draft.loading = true;
        break;
      case ActionType.LOAD_TODO_SUCCESS:
        draft.loading = false;
        console.log("여기는 reducer", action);
        draft.count = action.payload.count;
        draft.todoList = action.payload.todoList;
        break;
      case ActionType.LOAD_TODO_FAILURE:
        draft.loading = false;
        draft.error = true;
        break;
      case ActionType.ADD_TODO_REQUEST:
        draft.loading = true;
        break;
      case ActionType.ADD_TODO_SUCCESS:
        draft.loading = false;
        draft.todoList.push(action.payload);
        break;
      default:
        break;
    }
  });
export default reducer;
