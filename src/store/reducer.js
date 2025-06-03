import {
  ADD_TODO,
  DELETE_TODO,
  SET_TODO_INDEX,
  SET_TODO_INPUT,
  UPDATE_TODO,
} from "./constants";

const initState = {
  todoInput: "",
  todos: [],
  editIndex: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        todoInput: "",
      };
    case SET_TODO_INDEX:
      return {
        ...state,
        editIndex: action.payload,
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.index ? action.payload.value : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export { initState };
export default reducer;
