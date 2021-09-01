import { updateDate } from "./../../utils/makeData";
import { Itodo } from "../../types";
import { ActionType } from "../types/index";
import produce from "immer";
import { ActionRequest } from "../actionTypes";

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
        draft.todoList.push(action.payload as Itodo);
        break;
      case ActionType.ADD_TODO_FAILURE:
        draft.loading = false;
        draft.error = true;
        break;
      case ActionType.DELETE_TODO_REQUEST:
        draft.loading = true;
        break;
      case ActionType.DELETE_TODO_SUCCESS:
        {
          draft.loading = false;
          const updatedList = draft.todoList.filter(
            (todo) => todo.id !== action.payload.id
          );
          draft.todoList = updatedList;
        }
        break;
      case ActionType.DELETE_TODO_FAILURE:
        draft.loading = false;
        draft.error = true;
        break;
      case ActionType.UPDATE_CONTENT_TODO_REQUEST:
        draft.loading = true;
        break;
      case ActionType.UPDATE_CONTENT_TODO_SUCCESS:
        {
          draft.loading = false;
          const updatedList = draft.todoList.map((todo) => {
            if (todo.id === action.payload.id) {
              todo.content = action.payload.content;
              todo.updatedAt = updateDate();
              return todo;
            } else return todo;
          });
          draft.todoList = updatedList;
        }
        break;
      case ActionType.UPDATE_CONTENT_TODO_FAILURE:
        draft.loading = false;
        draft.error = true;
        break;
      case ActionType.UPDATE_CHECK_TODO_REQUEST:
        draft.loading = true;
        break;
      case ActionType.UPDATE_CHECK_TODO_SUCCESS:
        {
          draft.loading = false;
          const updatedList = draft.todoList.map((todo) => {
            if (todo.id === action.payload.id) {
              todo.isCheck = action.payload.isCheck;
              todo.updatedAt = updateDate();
              return todo;
            } else return todo;
          });
          draft.todoList = updatedList;
        }
        break;
      case ActionType.UPDATE_CHECK_TODO_FAILURE:
        draft.loading = false;
        draft.error = true;
        break;
      default:
        break;
    }
  });
export default reducer;
