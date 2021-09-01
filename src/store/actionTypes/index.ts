import { Itodo } from "../../types";
import { ActionType } from "../types/index";

// load
export interface LoadTodoRequestAction {
  type: ActionType.LOAD_TODO_REQUEST;
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

// add
export interface AddTodoRequestAction {
  type: ActionType.ADD_TODO_REQUEST;
  payload: {
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
    updatedAt: string;
  };
}

export interface AddTodoFailureAction {
  type: ActionType.ADD_TODO_FAILURE;
}

// delete
export interface DeleteTodoRequestAction {
  type: ActionType.DELETE_TODO_REQUEST;
  payload: {
    id: string;
  };
}

export interface DeleteTodoSuccessAction {
  type: ActionType.DELETE_TODO_SUCCESS;
  payload: {
    id: string;
  };
}

export interface DeleteTodoFailureAction {
  type: ActionType.DELETE_TODO_FAILURE;
}

// update content
export interface UpdateContentTodoRequestAction {
  type: ActionType.UPDATE_CONTENT_TODO_REQUEST;
  payload: {
    id: string;
    content: string;
  };
}

export interface UpdateContentTodoSuccessAction {
  type: ActionType.UPDATE_CONTENT_TODO_SUCCESS;
  payload: {
    id: string;
    content: string;
  };
}

export interface UpdateContentTodoFailureAction {
  type: ActionType.UPDATE_CONTENT_TODO_FAILURE;
}

// udate check
export interface UpdateCheckTodoRequestAction {
  type: ActionType.UPDATE_CHECK_TODO_REQUEST;
  payload: {
    id: string;
    isCheck: boolean;
  };
}

export interface UpdateCheckTodoSuccessAction {
  type: ActionType.UPDATE_CHECK_TODO_SUCCESS;
  payload: {
    id: string;
    isCheck: boolean;
  };
}

export interface UpdateCheckTodoFailureAction {
  type: ActionType.UPDATE_CHECK_TODO_FAILURE;
}

// all action request
export type ActionRequest =
  | LoadTodoRequestAction
  | LoadTodoSuceessAction
  | LoadTodoFailureAction
  | AddTodoRequestAction
  | AddTodoSuccessAction
  | AddTodoFailureAction
  | DeleteTodoRequestAction
  | DeleteTodoSuccessAction
  | DeleteTodoFailureAction
  | UpdateContentTodoRequestAction
  | UpdateContentTodoSuccessAction
  | UpdateContentTodoFailureAction
  | UpdateCheckTodoRequestAction
  | UpdateCheckTodoSuccessAction
  | UpdateCheckTodoFailureAction;
