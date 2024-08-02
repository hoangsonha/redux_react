import { useState } from "react";
import {
  actionIncrease,
  actionDecrease,
  actionAddToDo,
  actionRemoveToDo,
} from "./redux/actions";
import { store } from "./redux/store";

function App() {
  const [count, setCount] = useState(store.getState().countReducer);
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState(store.getState().todoReducer);

  const handleIncrease = () => {
    store.dispatch(actionIncrease(10));
    setCount(store.getState().countReducer);
  };

  const handleDecrease = () => {
    store.dispatch(actionDecrease(10));
    setCount(store.getState().countReducer);
  };

  const handleToDoValue = (e) => {
    setTodoValue(e.target.value);
  };

  const handleToDo = () => {
    store.dispatch(
      actionAddToDo({
        name: todoValue,
        id: Math.random(),
      })
    );
    setTodoValue("");
    setTodos(store.getState().todoReducer);
  };

  const handleDelete = (todo) => {
    store.dispatch(actionRemoveToDo(todo));
    setTodos(store.getState().todoReducer);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>

      <div>
        <input type="text" value={todoValue} onChange={handleToDoValue} />
        <button onClick={handleToDo}>Add ToDo</button>
      </div>
      {todos.map((todo) => {
        return (
          <li>
            {todo.name} <span onClick={() => handleDelete(todo)}>Delete</span>
          </li>
        );
      })}
    </div>
  );
}

export default App;
