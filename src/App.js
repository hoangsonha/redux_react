import logo from "./logo.svg";
import "./App.css";
import { stores } from "./redux/stores";
import {
  actionIncrease,
  actionDecrease,
  actionAddToDo,
  actionRemoveToDo,
  actionAddToDoAsync,
} from "./redux/actions";
import { useState } from "react";
import axios from "axios";

function App() {
  const [n, setN] = useState(stores.getState().countReducer);

  const [a, setA] = useState("");

  const [todo, setTodo] = useState(stores.getState().todoReducer);

  const handleIncrease = () => {
    stores.dispatch(actionIncrease(10));
    setN(stores.getState().countReducer);
  };

  const handleDecrease = () => {
    stores.dispatch(actionDecrease(10));
    setN(stores.getState().countReducer);
  };

  //
  // const fetchToDo = async () => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  //   stores.dispatch(
  //     actionAddToDo({
  //       name: res.data.title,
  //       id: res.data.id,
  //     })
  //   );
  // };

  const handleActionToDo = () => {
    // fetchToDo();

    actionAddToDoAsync();

    setTodo(stores.getState().todoReducer);
    setA("");
  };

  const handleDelete = (to) => {
    console.log("Clicked handleDlele");
    stores.dispatch(actionRemoveToDo(to));
    setTodo(stores.getState().todoReducer);
  };

  const handleTodo = (e) => {
    setA(e.target.value);
  };

  return (
    <div className="App">
      <h1>{n}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>

      <div>
        <input type="text" value={a} onChange={handleTodo} />
        <button onClick={handleActionToDo}>Add Todo</button>
      </div>
      {todo.map((to) => {
        return (
          <div>
            {to.name} <span onClick={() => handleDelete(to)}>Xoa</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
