import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducers } from "./countReducers";
import { todoReducers } from "./todoReducers";

import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  countReducer: countReducers,
  todoReducer: todoReducers,
});

const persisConfig = {
  key: "root",
  storage,
  whitelist: ["countReducer", "todoReducer"],
  blacklist: [],
};

// const middleware = (store) => {
//     return (next) => {
//         return (action) => {

//         }
//     }
// }

const middleware1 = (store) => (next) => (action) => {
  console.log("middleware1 : ", { store, next, action });
  next(action);
};

// const middleware2 = (store) => (next) => (action) => {
//   console.log("middleware2 : ", { store, next, action });
//   next(action);
// };

// const middleware3 = (store) => (next) => (action) => {
//   console.log("middleware3 : ", { store, next, action });
//   if (action.payload?.name?.includes("aaa")) {
//     next({
//       type: action.type,
//       payload: {
//         ...action.payload,
//         name: "***",
//       },
//     });
//   } else {
//     next(action);
//   }
// };

// k có next(action) ở 1 trong 3 là sẽ k qua đc reducer

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  trace: true,
  traceLimit: 25,
});

const persistedReducer = persistReducer(persisConfig, rootReducer);

export const stores = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export const persistor = persistStore(stores);

// export const stores = createStore(
//     rootReducer,
//     applyMiddleware(middleware1, middleware2, middleware3)
//   );
