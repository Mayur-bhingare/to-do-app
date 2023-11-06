import { useDispatch, useSelector } from "react-redux";
import { inputChange, saveTodo } from "../redux/todo.slice";

const InputBox = () => {
  let dispatch = useDispatch();
  //   let {inputText} = useSelector(function(state){
  //    return  state.todos
  //   })
  let { inputText } = useSelector((state) => state.todos);
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="enter todo"
          value={inputText}
          onChange={(e) => {
            dispatch(inputChange(e.target.value)); // {payload:input.value}
          }}
        />
        <button
          onClick={() => {
            dispatch(saveTodo()); // {payload:input.value}
          }}
          className="input-group-text btn btn-success"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default InputBox;
