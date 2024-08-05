import { Types } from "./Types";

const init = 0;
export const countReducer = (state = init, action) => {
  switch (action.type) {
    case Types.increase:
      return state + action.payload;
    case Types.decrease:
      return state - action.payload;
    default:
      return state;
  }
};
