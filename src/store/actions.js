import {
  ADD_TODO,
  DELETE_TODO,
  SET_TODO_INDEX,
  SET_TODO_INPUT,
  UPDATE_TODO,
} from "./constants";

export const setToDoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});

export const addToDo = (payload) => ({
  type: ADD_TODO,
  payload,
});
export const deleteToDo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};
export const setToDoIndex = (payload) => {
  return {
    type: SET_TODO_INDEX,
    payload,
  };
};
