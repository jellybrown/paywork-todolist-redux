import {
  AddTodoRequestAction,
  // loadTodoRequest,
  LoadTodoRequestAction,
} from "./../actions/index";
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

export function* loadTodo({ payload }: LoadTodoRequestAction) {
  try {
    const result: ReadResponse = yield call(api.get, payload.url);
    // const result = {
    //   status: 200,
    //   count: 2,
    //   todoList: fakeData,
    // };
    yield put({ type: ActionType.LOAD_TODO_SUCCESS, payload: result });
  } catch {
    yield put({ type: ActionType.LOAD_TODO_FAILURE });
  }
}

export function* addTodo(action: AddTodoRequestAction) {
  try {
    const result: CreateResponse = yield call(api.post, action.payload);
    yield put({ type: ActionType.ADD_TODO_SUCCESS });
  } catch {
    yield put({ type: ActionType.ADD_TODO_FAILURE });
  }
}

export function* watchLoadTodo() {
  yield takeLatest(ActionType.LOAD_TODO_REQUEST, loadTodo);
}

export function* watchAddTodo() {
  //  yield takeLatest(addTodoRequest, addTodo);
}

export default function* todosSaga() {
  yield all([fork(watchLoadTodo), fork(watchAddTodo)]);
}
