import { Types } from "./Types";

const init = 0;

export const countReducers = (state = init, action) => {
  // console.log(state); // sau lần render đầu nó sẽ chạy vô miđleware trước

  switch (action.type) {
    case Types.increase:
      return state + action.payload;
    case Types.decrease:
      return state - action.payload;
    default:
      return state;
  }
};
