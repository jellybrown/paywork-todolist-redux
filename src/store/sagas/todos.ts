import { DeleteResponse } from "./../../api/api";
import { DeleteTodoRequestAction } from "./../actionTypes/index";
import { Itodo } from "./../../types";
import { AddTodoRequestAction } from "../actionTypes/index";
import { api, CreateResponse, ReadResponse } from "../../api/api";
import {
  fork,
  all,
  delay,
  call,
  put,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import { ActionType } from "../types";
import { generateData } from "../../utils";

const TODO_URL = "/todo";

// load 요청이 들어오면 실행될 함수
export function* loadTodo() {
  try {
    const result: ReadResponse = yield call(api.get, TODO_URL);
    yield put({ type: ActionType.LOAD_TODO_SUCCESS, payload: result });
  } catch {
    yield put({ type: ActionType.LOAD_TODO_FAILURE });
  }
}

// add 요청이 들어오면 실행될 함수
export function* addTodo({ payload }: AddTodoRequestAction) {
  let data: Itodo;
  try {
    const obj = { url: TODO_URL, content: payload.content };
    const result: CreateResponse = yield call(api.post, obj);

    yield (data = generateData(result.content));
    yield put({ type: ActionType.ADD_TODO_SUCCESS, payload: data });
  } catch {
    yield put({ type: ActionType.ADD_TODO_FAILURE });
  }
}

export function* deleteTodo({ payload }: DeleteTodoRequestAction) {
  try {
    const obj = { url: TODO_URL, id: payload.id };
    const result: DeleteResponse = yield call(api.remove, obj);
    yield put({
      type: ActionType.DELETE_TODO_SUCCESS,
      payload: { id: result.id },
    });
  } catch {
    yield put({ type: ActionType.DELETE_TODO_FAILURE });
  }
}

// action을 지켜볼 watch 함수들
export function* watchLoadTodo() {
  yield takeLatest(ActionType.LOAD_TODO_REQUEST, loadTodo);
}

export function* watchAddTodo() {
  yield takeLatest(ActionType.ADD_TODO_REQUEST, addTodo);
}

export function* watchDeleteTodo() {
  yield takeLatest(ActionType.DELETE_TODO_REQUEST, deleteTodo);
}

export default function* todosSaga() {
  yield all([fork(watchLoadTodo), fork(watchAddTodo), fork(watchDeleteTodo)]);
}
