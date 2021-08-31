import {
  addTodoFailure,
  addTodoRequest,
  AddTodoRequestAction,
  addTodoSuceess,
  loadTodoFailure,
  // loadTodoRequest,
  LoadTodoRequestAction,
  loadTodoSuceess,
  LoadTodoSuceessAction,
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

// loadTodo({type: 'ss', data:'/todo' });

interface Action<T> {
  data: T;
}

function getAPI(url: string) {
  return api.get(url);
}

const fakeData = [
  {
    id: "string",
    content: "string",
    isCheck: true,
    createdAt: "2021-05-26T11:51:05.097Z",
  },
  {
    id: "string",
    content: "string",
    isCheck: true,
    createdAt: "2021-05-26T11:51:05.097Z",
  },
];

export function* loadTodo({ payload }: LoadTodoRequestAction) {
  try {
    console.log("pp-->>", payload);
    // const result: ReadResponse = yield call(getAPI, payload);
    const result = {
      status: 200,
      count: 2,
      todoList: fakeData,
    };
    console.log("re", result);
    yield put({ type: ActionType.ADD_TODO_SUCCESS, payload: result });
    //yield put(loadTodoSuceess(result));
    console.log("여기");
  } catch {
    yield put({ type: ActionType.ADD_TODO_FAILURE });
    console.log("errro");
  }
}

export function* addTodo(action: AddTodoRequestAction) {
  try {
    const result: CreateResponse = yield call(api.post, action.payload);
    yield put(addTodoSuceess(result));
  } catch {
    yield put(addTodoFailure());
  }
}

export function* watchLoadTodo() {
  yield takeLatest(ActionType.LOAD_TODO_REQUEST, loadTodo);
}

export function* watchAddTodo() {
  yield takeLatest(addTodoRequest, addTodo);
}

export default function* todosSaga() {
  yield all([fork(watchLoadTodo), fork(watchAddTodo)]);
}
