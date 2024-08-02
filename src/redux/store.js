import { combineReducers, createStore, applyMiddleware } from "redux";
import { countReducer } from "./countReducer";
import { todoReducer } from "./todoReducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  countReducer: countReducer,
  todoReducer: todoReducer,
});

const persisConfig = {
  key: "root",
  storage,
  whitelist: ["countReducer", "todoReducer"],
  blacklist: [],
};

const midleware1 = (store) => (next) => (action) => {
  if (action.payload?.name?.includes("aaa") && action.type === "ADDTODO") {
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

const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  trase: true,
  traceLimit: 25,
});

const persistedReducer = persistReducer(persisConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  reduxExtension(applyMiddleware(midleware1))
);

export const persistor = persistStore(store);
