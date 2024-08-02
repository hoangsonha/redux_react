import { Types } from "./Types";

export const actionIncrease = (data) => {
  return {
    type: Types.increase,
    payload: data,
  };
};

export const actionDecrease = (data) => {
  return {
    type: Types.decrease,
    payload: data,
  };
};

export const actionAddToDo = (data) => {
  return {
    type: Types.addToDo,
    payload: data,
  };
};

export const actionRemoveToDo = (data) => {
  return {
    type: Types.removeToDo,
    payload: data,
  };
};
