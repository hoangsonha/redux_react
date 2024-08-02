import { combineReducers, createStore } from "redux";
import { countReducers } from "./countReducers";
import { todoReducers } from "./todoReducers";

const rootReducer = combineReducers({
  countReducer: countReducers,
  todoReducer: todoReducers,
});

export const stores = createStore(rootReducer);
