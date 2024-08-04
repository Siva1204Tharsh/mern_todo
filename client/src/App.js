import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => console.log("Error fetching todos:", err));
  }, []);

  const addTodo = () => {
    axios
      .post("http://localhost:5000/api/todos", {
        text,
      })
      .then((res) => {
        setTodos([...todos, res.data]);
        setText("");
      })
      .catch((err) => console.log("Error adding todo:", err));
  };

  return (
    <div className="">
      <h1>Todo_App</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add_Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
