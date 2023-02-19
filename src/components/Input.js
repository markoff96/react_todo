import {useState } from 'react'

function Input({addTodo}) {
 const [text, setText] = useState('')
 const createNewTask = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
      <form onSubmit={createNewTask}>
        <input className='inputField' 
               placeholder='Type here...' 
               onChange={(e) => setText(e.target.value)} 
               value={text} 
         />
        <button type='submit'>Add task</button>
      </form>   
  )
  
}

export default Input