import React, { useReducer, useRef } from "react";
import "./styles/index.scss";
import { useStore, actions } from "./store";
import "./App.scss";
function App() {
  const [state, dispatch] = useStore();
  const { todoInput, todos, editIndex } = state;
  const inputRef = useRef();
  const { setToDoIndex, setToDoInput, addToDo, deleteToDo, updateTodo } =
    actions;

  const handleSubmit = () => {
    if (todoInput.trim()) {
      dispatch(addToDo(todoInput));
      inputRef.current.focus();
      dispatch(setToDoIndex(null));
    }
  };
  const handleEdit = (index) => {
    dispatch(setToDoIndex(index));
    dispatch(setToDoInput(todos[index]));
  };
  const handleUpdate = () => {
    if (todoInput.trim()) {
      dispatch(updateTodo({ index: editIndex, value: todoInput }));
      dispatch(setToDoIndex(null));
    }
  };

  return (
    <div className="todos-wrap">
      <h1>To do</h1>
      <div className="operation-wrap">
        <input
          type="text"
          placeholder="Add to do.."
          onChange={(e) => dispatch(setToDoInput(e.target.value))}
          value={todoInput}
          ref={inputRef}
          className="input"
        />
        <button onClick={handleSubmit} className="add-btn">
          Add
        </button>
        <button
          onClick={handleUpdate}
          className="update-btn"
          disabled={editIndex === null}
        >
          Update
        </button>
      </div>
      <table className="todo-list" border={1}>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td className="todo-item">
                <p>{todo}</p>
                <i
                  className="bi bi-x-lg"
                  onClick={() => dispatch(deleteToDo(index))}
                ></i>
                <button onClick={() => handleEdit(index)} className="edit-btn">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
