import './App.css'
import { useState } from 'react'


function App() {
  const [text, setText] = useState('Make a task')

  function createNewTask(event) {
    event.preventDefault()
    console.log(text)
  }

  return <div className="App">
    <div className='inputBlock'>
      <form onSubmit={createNewTask}>
        <h1>Todo app React</h1>
        <input className='inputField'  onChange={(e) => setText(e.target.value)} ></input>
        <button className='taskButton' type='submit'>Add a task</button>  
      </form>   
    </div>

    <ul>
      <li>Bless the god imperror</li>
      <li>Become an Inqusitor</li>
      <li>{text}</li>
    </ul>
  </div>
}

export default App
