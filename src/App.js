import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import ToDoList from './components/ToDoList'

function App() {
  const [todos,setTodos] = useState([])

  const addToHandler = (text) => {
    setTodos([...todos, text])
  }

  return <div className='App'>
    <h1>Todo App React</h1>
    <Input addTodo={addToHandler} />
    <ToDoList todos={todos} />
  </div>

 
}

export default App
