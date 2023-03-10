import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addToHandler = (text) => {
    setTodos([...todos, text]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  return (
    <div className="App">
      <h1>Todo App React</h1>
      <Input addTodo={addToHandler} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
