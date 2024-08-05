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

export const actionAdd = (data) => {
  return {
    type: Types.todoAdd,
    payload: data,
  };
};

export const actionRemove = (data) => {
  return {
    type: Types.todoRemove,
    payload: data,
  };
};
