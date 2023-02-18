import { useState } from "react"
import Input from "./Input"

function ToDoList() {
    const [element, setElement]= useState('')
    return (
    <div className='list'>
      <li name="list">Bless the god imperror</li>
      <li>Become an Inqusitor</li>
    </div>
    )
}

export default ToDoList