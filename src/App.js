import './App.css'
import Input from './components/Input'
import ToDoList from './components/ToDoList'


const list = document.getElementsByClassName('list')

function App() {
  return <div className='App'>
    <Input />
    <ToDoList />
  </div>

 
}

export default App
