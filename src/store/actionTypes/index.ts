import { Itodo } from "../../types";
import { ActionType } from "../types/index";

export interface LoadTodoRequestAction {
  type: ActionType.LOAD_TODO_REQUEST;
  payload: {
    url: string;
  };
}

export interface LoadTodoSuceessAction {
  type: ActionType.LOAD_TODO_SUCCESS;
  payload: {
    count: number;
    todoList: Itodo[];
  };
}

export interface LoadTodoFailureAction {
  type: ActionType.LOAD_TODO_FAILURE;
}

export interface AddTodoRequestAction {
  type: ActionType.ADD_TODO_REQUEST;
  payload: {
    url: string;
    content: string;
  };
}

export interface AddTodoSuccessAction {
  type: ActionType.ADD_TODO_SUCCESS;
  payload: {
    id: string;
    content: string;
    isCheck: boolean;
    createdAt: string;
  };
}

export interface AddTodoFailureAction {
  type: ActionType.ADD_TODO_FAILURE;
}

export type ActionRequest =
  | LoadTodoRequestAction
  | LoadTodoSuceessAction
  | LoadTodoFailureAction
  | AddTodoRequestAction
  | AddTodoSuccessAction
  | AddTodoFailureAction;
