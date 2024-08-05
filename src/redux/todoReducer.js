import { Types } from "./Types";

const init = [];

export const todoReducer = (state = init, action) => {
  switch (action.type) {
    case Types.todoAdd:
      return [...state, action.payload];
    case Types.todoRemove:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};
