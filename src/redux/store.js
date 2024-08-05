import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducer } from "./countReducer";
import { todoReducer } from "./todoReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  countReducer,
  todoReducer,
});

const config = {
  key: "root",
  storage,
  whiteList: [],
  blackList: [],
};

const middleaware = (store) => (next) => (action) => {
  console.log("no");
  if (action.type === "ADDTODO" && action.payload.name.includes("aaa")) {
    next({
      type: action.type,
      payload: {
        ...action.payload,
        name: "***",
      },
    });
  } else {
    next(action);
  }
};

const middleaware2 = (store) => (next) => (action) => {
  console.log("yes");
  if (action.type === "REMOVETODO" && action.payload.name.includes("aaa")) {
    console.log("yesNo?");
  } else {
    next(action);
  }
};

const pr = persistReducer(config, rootReducer);

const s = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  trace: true,
  traceLimit: 25,
});

export const store = createStore(
  pr,
  s(applyMiddleware(middleaware, middleaware2))
);

export const sto = persistStore(store);
