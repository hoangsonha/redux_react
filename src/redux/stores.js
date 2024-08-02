import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducers } from "./countReducers";
import { todoReducers } from "./todoReducers";

import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  countReducer: countReducers,
  todoReducer: todoReducers,
});

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

export const stores = createStore(rootReducer, applyMiddleware(thunk));

// export const stores = createStore(
//     rootReducer,
//     applyMiddleware(middleware1, middleware2, middleware3)
//   );
