import { useSelector, useDispatch } from "react-redux";
import { markAsComplete } from "../redux/todo.slice";
const TodoList = () => {
  let dispatch = useDispatch();
  let { todoList } = useSelector((state) => state.todos);
  return (
    <>
      <ul className="list-group rounded-0 mt-2">
        {todoList.map((todo, index) => {
          return (
            <li className="list-group-item" key={index}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                disabled={todo.isCompleted}
                onChange={() => {
                  dispatch(markAsComplete(index));
                }}
              />
              <span
                className={
                  todo.isCompleted
                    ? `ms-2 text-decoration-line-through fst-italic text-muted`
                    : "ms-2"
                }
              >
                {todo.name}
              </span>
              {todo.isCompleted ? null : (
                <button className="btn btn-danger btn-sm ms-3">DEL</button>
              )}
            </li>
          );
        })}
        {/* <li className="list-group-item">
          <input type="checkbox" checked disabled />
          <span className="ms-2 text-decoration-line-through fst-italic text-muted">
            Lorem ipsum dolor sit amet.
          </span>
        </li> */}
      </ul>
    </>
  );
};

export default TodoList;
