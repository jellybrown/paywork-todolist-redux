import { Itodo } from "../../types";
import { ReadResponse, CreateResponse } from "./../../api/api";
import { ActionType } from "../types/index";

export const loadTodoRequest = (payload: string) => ({
  type: ActionType.LOAD_TODO_REQUEST,
  payload,
});

export const loadTodoSuceess = (payload: ReadResponse) => ({
  type: ActionType.LOAD_TODO_SUCCESS,
  payload: { count: payload.count, todos: payload.todoList },
});

export const loadTodoFailure = () => ({
  type: ActionType.LOAD_TODO_FAILURE,
  payload: null,
});

interface AddPayload {
  url: string;
  content: string;
}

export const addTodoRequest = (payload: AddPayload) => ({
  type: ActionType.ADD_TODO_REQUEST,
  payload,
});

export const addTodoSuceess = (payload: CreateResponse) => {
  const createdAt = "2021T22:22";
  const isCheck = false;
  const id = "1";

  return {
    type: ActionType.ADD_TODO_SUCCESS,
    payload: { id, content: payload.msg, isCheck, createdAt } as Itodo,
  };
};

export const addTodoFailure = () => ({
  type: ActionType.ADD_TODO_FAILURE,
  payload: null,
});

export type LoadTodoRequestAction = ReturnType<typeof loadTodoRequest>;
export type LoadTodoSuceessAction = ReturnType<typeof loadTodoSuceess>;
export type LoadTodoFailureAction = ReturnType<typeof loadTodoFailure>;
export type AddTodoRequestAction = ReturnType<typeof addTodoRequest>;
export type AddTodoSuccessAction = ReturnType<typeof addTodoSuceess>;
export type AddTodoFailureAction = ReturnType<typeof addTodoFailure>;

export type ActionRequest =
  | LoadTodoRequestAction
  | LoadTodoSuceessAction
  | LoadTodoFailureAction
  | AddTodoRequestAction
  | AddTodoSuccessAction
  | AddTodoFailureAction;

// interface LoadTodoRequestureAction {
//   type: ActionType.LOAD_TODO_REQUEST;
//   payload: null;
// }

// interface LoadTodoSuccessAction {
//   type: ActionType.LOAD_TODO_SUCCESS;
//   payload: Itodo[];
// }

// interface LoadTodoFailureAction {
//   type: ActionType.LOAD_TODO_FAILURE;
//   payload: null;
// }

// interface AddTodoRequestAction {
//   type: ActionType.ADD_TODO_REQUEST;
//   payload: null;
// }

// interface AddTodoSuccessAction {
//   type: ActionType.ADD_TODO_SUCCESS;
//   payload: Itodo;
// }

// interface AddTodoFailureAction {
//   type: ActionType.ADD_TODO_FAILURE;
//   payload: null;
// }

// interface DeleteTodoASuccessAction {
//   type: ActionType.DELETE_TODO_SUCCESS;
//   payload: number;
// }

// export type Action =
//   | LoadTodoRequestureAction
//   | LoadTodoSuccessAction
//   | LoadTodoFailureAction
//   | AddTodoRequestAction
//   | AddTodoSuccessAction
//   | AddTodoFailureAction
//   | DeleteTodoASuccessAction;
