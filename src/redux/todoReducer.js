import { Types } from "./Types";

const init = [];

export const todoReducer = (state = init, action) => {
  switch (action.type) {
    case Types.addToDo:
      return [...state, action.payload];
    case Types.removeToDo:
      return state.filter((st) => st.id !== action.payload.id);
    default:
      return state;
  }
};
