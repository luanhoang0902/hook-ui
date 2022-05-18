import {
    SET_TODO_INPUT,
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO
  } from "./constants";
  
  export const setTodoInput = (payload) => {
    return {
      type: SET_TODO_INPUT,
      payload
    };
  };
  
  export const addTodo = (payload) => {
    return {
      type: ADD_TODO,
      payload
    };
  };
  
  export const deleteTodo = (id) => {
    return {
      type: DELETE_TODO,
      id
    };
  };
  
  export const updateTodo = (id, payload) => {
    return {
      type: UPDATE_TODO,
      payload,
      id
    };
  };
  