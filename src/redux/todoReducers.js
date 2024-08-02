import { Types } from "./Types";

const init = [];

export const todoReducers = (state = init, action) => {
  console.log(state);
  switch (action.type) {
    case Types.addToDo:
      return [...state, action.payload];
    case Types.removeToDo:
      return state.filter((todo) => todo !== action.payload);
    default:
      return state;
  }
};
