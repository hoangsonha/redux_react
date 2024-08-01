import logo from "./logo.svg";
import "./App.css";
import { store } from "../src/redux/store";
import { increaseCount, decreaseCount } from "./redux/actions";
import { useState } from "react";

function App() {
  console.log(store.getState());

  const [n, setn] = useState(store.getState());

  const handleIncrease = () => {
    store.dispatch(increaseCount(10));
    setn(store.getState());
  };

  const handleDecrease = () => {
    store.dispatch(decreaseCount(10));
    setn(store.getState());
  };

  return (
    <div className="App">
      <h1>{n}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;
