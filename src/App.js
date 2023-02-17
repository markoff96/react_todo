import './App.css'
import { useState } from 'react'

// import { createElement } from 'react'


// // function createNewTask({inputValue}) {
// //   return createElement(
// //     'li',
// //      {className: 'creation'},
// //     {inputValue}
// //   );
// // }
// // createNewTask()


function App() {
  const [inputValue] = useState()
  console.log(inputValue)
  return <div className="App">
    <div className='inputBlock'>
        <h1>Todo app React</h1>
        <input className='inputField' 
        placeholder={'Make a task'} value={inputValue}></input>
        <button className='taskButton' >Add a task</button>   
    </div>

    

    <ul>
      <li>Bless the god imperror</li>
      <li>Become an Inqusitor</li>
    </ul>
  </div>
}

export default App
