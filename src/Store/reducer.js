import {
    SET_TODO_INPUT,
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO
  } from "./constants";
  
  const initState = {
    todoInput: "",
    todos: []
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case SET_TODO_INPUT:
        return {
          ...state,
          todoInput: action.payload
        };
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
      case DELETE_TODO:
        const newTodo = [...state.todos];
        newTodo.splice(action.id, 1);
        return {
          ...state,
          todos: newTodo
        };
      case UPDATE_TODO:
        const changeTodo = [...state.todos];
        changeTodo.splice(action.id, 1, action.payload);
        return {
          ...state,
          todos: changeTodo
        };
      default:
        throw new Error("Invalid action");
    }
  }
  
  export { initState };
  export default reducer;
  