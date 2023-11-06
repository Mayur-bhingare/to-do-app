import { createSlice } from "@reduxjs/toolkit";
const ToDoSlice = createSlice({
  name: "ToDoSlice",
  initialState: {
    inputText: "",
    todoList: [],
  },
  reducers: {
    inputChange: (state, action) => {
      state.inputText = action.payload;
    },
    saveTodo: (state) => {
      let _newTodo = {
        name: state.inputText,
        isCompleted: false,
      };
      state.todoList.unshift(_newTodo);
      state.inputText = "";
      alert("Todo Saved Successfully");
    },
    markAsComplete: (state, action) => {
      state.todoList[action.payload].isCompleted = true;
    },
  },
});

export default ToDoSlice;
export const { inputChange, saveTodo, markAsComplete } = ToDoSlice.actions;
