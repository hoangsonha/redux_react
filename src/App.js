import { useState } from "react";
import {
  actionIncrease,
  actionDecrease,
  actionAdd,
  actionRemove,
} from "./redux/actions";
import { store } from "./redux/store";

function App() {
  const [state, setState] = useState(store.getState().countReducer);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(store.getState().todoReducer);

  const handleIncrease = () => {
    store.dispatch(actionIncrease(10));
    setState(store.getState().countReducer);
  };

  const handleDecrease = () => {
    store.dispatch(actionDecrease(10));
    setState(store.getState().countReducer);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    store.dispatch(
      actionAdd({
        name: text,
        id: Math.random(),
      })
    );
    setTodos(store.getState().todoReducer);
    setText("");
  };

  const handleRemove = (todo) => {
    store.dispatch(actionRemove(todo));
    setTodos(store.getState().todoReducer);
  };

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <div>
        <h1>ToDo</h1>
        <input type="text" value={text} onChange={handleText} />
        <button onClick={handleAdd}>AddToDO</button>
      </div>
      {todos.map((todo) => {
        return (
          <li>
            {todo.name} <span onClick={() => handleRemove(todo)}>Xoa</span>
          </li>
        );
      })}
    </div>
  );
}

export default App;
