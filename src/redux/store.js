import { countReducer } from "./reducers";
import { createStore } from "redux";

export const store = createStore(countReducer);
