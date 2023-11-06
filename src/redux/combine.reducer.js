import { combineReducers } from "@reduxjs/toolkit";
import ToDoSlice from "./todo.slice";

const reducer = combineReducers({
  todos: ToDoSlice.reducer,
});

export default reducer;
