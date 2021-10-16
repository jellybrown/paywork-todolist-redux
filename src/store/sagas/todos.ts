import { Itodo } from "./../../types";
import {
  AddTodoRequestAction,
  UpdateContentTodoRequestAction,
  DeleteTodoRequestAction,
  UpdateCheckTodoRequestAction,
} from "../actionTypes/index";
import { api } from "../../api/api";
import {
  CreateResponse,
  DeleteResponse,
  ReadResponse,
  UpdateCheckResponse,
  UpdateContentResponse,
} from "api/types";
import { fork, all, call, put, takeLatest, debounce } from "redux-saga/effects";
import { ActionType } from "../types";
import { generateData } from "../../utils";

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

    yield (data = generateData(result.content));
    yield put({ type: ActionType.ADD_TODO_SUCCESS, payload: data });
  } catch {
    yield put({ type: ActionType.ADD_TODO_FAILURE });
  }
}

export function* deleteTodo({ payload }: DeleteTodoRequestAction) {
  try {
    const obj = { url: `${TODO_URL}/${payload.id}`, id: payload.id };
    const result: DeleteResponse = yield call(api.remove, obj);
    yield put({
      type: ActionType.DELETE_TODO_SUCCESS,
      payload: { id: result.id },
    });
  } catch {
    yield put({ type: ActionType.DELETE_TODO_FAILURE });
  }
}

export function* updateContentTodo({
  payload,
}: UpdateContentTodoRequestAction) {
  try {
    const obj = {
      url: `${TODO_URL}/${payload.id}`,
      content: payload.content,
      id: payload.id,
    };
    const result: UpdateContentResponse = yield call(api.patchContent, obj);
    yield put({
      type: ActionType.UPDATE_CONTENT_TODO_SUCCESS,
      payload: { id: result.id, content: result.content },
    });
  } catch {
    yield put({ type: ActionType.UPDATE_CONTENT_TODO_FAILURE });
  }
}

export function* updateCheckTodo({ payload }: UpdateCheckTodoRequestAction) {
  try {
    const obj = {
      url: `${TODO_URL}/${payload.id}`,
      isCheck: payload.isCheck,
      id: payload.id,
    };
    const result: UpdateCheckResponse = yield call(api.patchCheck, obj);
    yield put({
      type: ActionType.UPDATE_CHECK_TODO_SUCCESS,
      payload: { id: result.id, isCheck: result.isCheck },
    });
  } catch {
    yield put({ type: ActionType.UPDATE_CHECK_TODO_FAILURE });
  }
}

export function* watchLoadTodo() {
  yield takeLatest(ActionType.LOAD_TODO_REQUEST, loadTodo);
}

export function* watchAddTodo() {
  yield takeLatest(ActionType.ADD_TODO_REQUEST, addTodo);
}

export function* watchDeleteTodo() {
  yield takeLatest(ActionType.DELETE_TODO_REQUEST, deleteTodo);
}

export function* watchUpdateContentTodo() {
  yield debounce(
    700,
    ActionType.UPDATE_CONTENT_TODO_REQUEST,
    updateContentTodo
  );
}

export function* watchUpdateCheckTodo() {
  yield takeLatest(ActionType.UPDATE_CHECK_TODO_REQUEST, updateCheckTodo);
}

export default function* todosSaga() {
  yield all([
    fork(watchLoadTodo),
    fork(watchAddTodo),
    fork(watchDeleteTodo),
    fork(watchUpdateContentTodo),
    fork(watchUpdateCheckTodo),
  ]);
}
