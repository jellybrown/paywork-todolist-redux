import { combineReducers } from "redux";
import todos from "./todos";

const reducer = combineReducers({
  todos: todos,
});

export default reducer;

export type RootType = ReturnType<typeof reducer>;
