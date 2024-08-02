import { Types } from "./Types";
import axios from "axios";
import { stores } from "./stores";

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

export const actionAddToDoAsync = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  stores.dispatch(
    actionAddToDo({
      name: res.data.title,
      id: res.data.id,
    })
  );
};

export const actionRemoveToDo = (data) => {
  return {
    type: Types.removeToDo,
    payload: data,
  };
};
