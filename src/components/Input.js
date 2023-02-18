import { useState } from 'react'

function Input() {
const [text, setText] = useState('')

function createNewTask(event) {
    event.preventDefault()
    console.log({text})

  }

  return <div className="App">
    <div className='inputBlock'>
      <form onSubmit={createNewTask}>
        <h1>Todo app React</h1>
        <input className='inputField' placeholder='Type here...' onChange={(e) => setText(e.target.value)} ></input>
        <button className='taskButton' type='submit'>Add task</button>  
      </form>   
    </div>
  </div>
}

export default Input