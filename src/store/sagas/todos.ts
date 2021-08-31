import { Itodo } from "./../../types";
import { AddTodoRequestAction } from "../actionTypes/index";
import { api, CreateResponse, PostObj, ReadResponse } from "../../api/api";
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

const TODO_URL = "/todo";

export function* loadTodo() {
  try {
    const result: ReadResponse = yield call(api.get, TODO_URL);
    yield put({ type: ActionType.LOAD_TODO_SUCCESS, payload: result });
  } catch {
    yield put({ type: ActionType.LOAD_TODO_FAILURE });
  }
}

export function* addTodo({ payload }: AddTodoRequestAction) {
  let data: Itodo;
  try {
    const obj = { url: TODO_URL, content: payload.content };
    const result: CreateResponse = yield call(api.post, obj);

    yield (data = {
      id: "aaa",
      content: result.msg,
      isCheck: false,
      createdAt: "2201101010",
    });

    yield put({ type: ActionType.ADD_TODO_SUCCESS, payload: data });
  } catch {
    yield put({ type: ActionType.ADD_TODO_FAILURE });
  }
}

export function* watchLoadTodo() {
  yield takeLatest(ActionType.LOAD_TODO_REQUEST, loadTodo);
}

export function* watchAddTodo() {
  yield takeLatest(ActionType.ADD_TODO_REQUEST, addTodo);
}

export default function* todosSaga() {
  yield all([fork(watchLoadTodo), fork(watchAddTodo)]);
}
